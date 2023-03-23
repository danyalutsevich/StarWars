import { StyleSheet, Text, View } from 'react-native';
import { useGetHomeWorldQuery } from '../store/swapi';

export default function Homeworld({ homeworldURL }) {

    const { data: homeworld, isLoading: homeworldLoading } = useGetHomeWorldQuery(homeworldURL);

    return (<>
        {!homeworldLoading &&
            <View style={styles.homeworldContainer}>
                <Text style={styles.title}>Homeworld: {homeworld.name}</Text>
                <Text style={styles.text}>Population: {homeworld.population}</Text>
                <Text style={styles.text}>Climate: {homeworld.climate}</Text>
                <Text style={styles.text}>Terrain: {homeworld.terrain}</Text>
                <Text style={styles.text}>Diameter: {homeworld.diameter}</Text>
                <Text style={styles.text}>Gravity: {homeworld.gravity}</Text>
                <Text style={styles.text}>Orbital Period: {homeworld.orbital_period}</Text>
                <Text style={styles.text}>Rotation Period: {homeworld.rotation_period}</Text>
                <Text style={styles.text}>Surface Water: {homeworld.surface_water}</Text>
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
    homeworldContainer: {
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