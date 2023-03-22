import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { useGetPageQuery, useGetHomeWorldQuery, useGetSpeciesQuery } from '../store/swapi';
import { DataTable, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { Character } from '../types';
import { addFan } from '../store/fansSlice';

const tableHead = ["Name", "Birth year", "Gender", "Home World", "Species"]

export default function CharacterTable(props: any) {

    const [page, setPage] = useState(0);
    const { data, error, isLoading } = useGetPageQuery(page + 1);

    const dispatch = useDispatch();
    const fans: string[] = useSelector((state: any) => state.fans.fans);

    if (isLoading) return (<Text>Loading...</Text>)
    console.log("props", props)

    return (
        <ScrollView horizontal>
            <DataTable style={styles.table}>
                <DataTable.Header>
                    <DataTable.Title textStyle={styles.text} style={{ marginTop: 5 }}><Button textColor='red' icon={"cards-heart"}> </Button></DataTable.Title>
                    <DataTable.Title textStyle={styles.text} style={styles.name}>Name</DataTable.Title>
                    <DataTable.Title textStyle={styles.text}>Birth year</DataTable.Title>
                    <DataTable.Title textStyle={styles.text}>Gender</DataTable.Title>
                    <DataTable.Title textStyle={styles.text}>Home World</DataTable.Title>
                    <DataTable.Title textStyle={styles.text}>Species</DataTable.Title>
                </DataTable.Header>
                {
                    data?.results.map((character, index) => (
                        <DataTable.Row key={index} onPress={() => { props.navigation.navigate("Details", { character }) }}>
                            <DataTable.Cell textStyle={styles.text}>
                                <Button textColor='red'
                                    icon={fans?.includes(character.name) ? "cards-heart" : "cards-heart-outline"}
                                    onPress={() => {
                                        dispatch(addFan(character))
                                    }}> </Button>
                            </DataTable.Cell>
                            <DataTable.Cell textStyle={styles.text} style={styles.name}>{character.name}</DataTable.Cell>
                            <DataTable.Cell textStyle={styles.text}>{character.birth_year}</DataTable.Cell>
                            <DataTable.Cell textStyle={styles.text}>{character.gender}</DataTable.Cell>
                            <DataTable.Cell textStyle={styles.text}>{character.homeworld}</DataTable.Cell>
                            <DataTable.Cell textStyle={styles.text}>{character.species}</DataTable.Cell>
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
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: "Inter_400Regular"
    },
    name: {
        flex: 2,
        marginLeft: -30
    },
    table: {
        width: 800,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    }
});