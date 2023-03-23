import { useGetSpeciesQuery } from '../store/swapi';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Species({ speciesURL }) {

    const { data: species, isLoading: speciesLoading } = useGetSpeciesQuery(speciesURL);

    return (
        <>
            {!speciesLoading &&
                <View style={styles.speciesContainer}>
                    <Text style={styles.title}>Species: {species.name}</Text>
                    <Text style={styles.text}>Classification: {species.classification}</Text>
                    <Text style={styles.text}>Designation: {species.designation}</Text>
                    <Text style={styles.text}>Average Height: {species.average_height} cm</Text>
                    <Text style={styles.text}>Average Lifespan: {species.average_lifespan} years</Text>
                    <Text style={styles.text}>Eye Colors: {species.eye_colors}</Text>
                </View>
            }
        </>
    )

}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Inter_400Regular',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
    },
    text: {
        fontFamily: 'Inter_400Regular',
        fontSize: 20,
        marginBottom: 5,
    },
    speciesContainer: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});
