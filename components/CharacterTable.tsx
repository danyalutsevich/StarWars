import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, useWindowDimensions } from 'react-native';

import { useGetPageQuery } from '../store/swapi';
import { DataTable, Button, ActivityIndicator, Searchbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { addFan, removeFan } from '../store/fansSlice';
import { saveState } from '../saveState';
import { store } from '../store/store';

export default function CharacterTable(props: any) {

    const [page, setPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    let { data, error, isLoading } = useGetPageQuery({ page: page + 1, searchQuery: searchQuery });

    const dispatch = useDispatch();
    const fans: string[] = useSelector((state: any) => state.fans.fans);

    const basicPhoneScreenWidth = 420;
    const { width } = useWindowDimensions();
    const isDesktop = width > basicPhoneScreenWidth; 

    if (isLoading) {
        return (<ActivityIndicator color='black' size={'large'} />)
    }

    return (
        <DataTable style={styles.table}>
            <Searchbar placeholder='Search' selectionColor={"#2044be33"} value={searchQuery} onChangeText={setSearchQuery} style={styles.searchbar}></Searchbar>
            <DataTable.Header>
                <Button textColor='black' icon={"cards-heart"}> </Button>
                <DataTable.Title textStyle={styles.text} style={styles.name}>Name</DataTable.Title>
                <DataTable.Title textStyle={styles.text}>Birth year</DataTable.Title>
                {isDesktop && <DataTable.Title textStyle={styles.text}>Gender</DataTable.Title>} 
                {isDesktop && <DataTable.Title textStyle={styles.text}>Home World</DataTable.Title>}
                {isDesktop && <DataTable.Title textStyle={styles.text}>Species</DataTable.Title>}
            </DataTable.Header>
            {
                data?.results.map((character, index) => (
                    <DataTable.Row key={index}
                        onPress={() => { props.navigation.navigate("Details", { character }) }}>
                        <Button textColor='red' style={styles.fanButton} //  don't wrap this button in DaraTable.Cell it will make it unclickable in web
                            icon={fans?.includes(character.name) ? "cards-heart" : "cards-heart-outline"}
                            onPress={() => {
                                fans?.includes(character.name) ?
                                    dispatch(removeFan(character)) :
                                    dispatch(addFan(character))
                                saveState(store.getState().fans); //  save state to local storage on press
                            }}> </Button>
                        <DataTable.Cell textStyle={styles.text} style={styles.name}>{character.name}</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.text}>{character.birth_year}</DataTable.Cell>
                        {isDesktop && <DataTable.Cell textStyle={styles.text}>{character.gender}</DataTable.Cell>}
                        {isDesktop && <DataTable.Cell textStyle={styles.text}>{character.homeworld}</DataTable.Cell>}
                        {isDesktop && <DataTable.Cell textStyle={styles.text}>{character.species}</DataTable.Cell>}
                    </DataTable.Row>
                ))
            }

            <DataTable.Pagination
                page={page}
                label={`${(page) * 10 + 1} - ${(page) * 10 + data.results.length} of ${data.count}`}
                numberOfPages={Number((data.count / 10).toFixed()) + 1}
                onPageChange={(page) =>
                    setPage(page)
                }
            />

        </DataTable>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: "Inter_400Regular",
        textAlign: 'left',
    },
    table: {
        maxWidth: 800,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    name:{
        flex: 2,
    },
    searchbar: {
        color: "black",
        backgroundColor: '#fff',
    },
    fanButton: {
        marginTop: 10,
    }
});