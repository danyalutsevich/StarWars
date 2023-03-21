import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { useGetPageQuery, useGetHomeWorldQuery } from '../store/swapi';



export default function CharacterTable() {

    const { data, error, isLoading } = useGetPageQuery(2);

    const tableHead = ["Name", "Birth year", "Gender", "Home World", "Species"]
    const tableContent = data?.results.map((character) => {
        return [character.name, character.birth_year, character.gender, character.homeworld, character.species]
    })

    if (isLoading) return (<Text>Loading...</Text>)

    return (
        <ScrollView style={styles.container}>
            <Table>
                <Row data={tableHead} style={styles.head} onPress={() => alert("title click")} flexArr={[2]} textStyle={styles.text} />
                {
                    data?.results.map((character, index) =>
                        <Row style={styles.row} textStyle={styles.text} flexArr={[2]} key={index}
                            data={
                                [character.name,
                                character.birth_year,
                                character.gender,
                                useGetHomeWorldQuery(character.homeworld)?.data?.name,
                                character.species]} />
                    )}

            </Table>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, width: "100%", padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row', width: 500 },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 56, },
    text: { textAlign: 'center' }
});