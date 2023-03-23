import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Character } from '../types';
import Homeworld from '../components/Homeworld';
import Species from '../components/Species';
import { useGetCharacterQuery } from '../store/starwars_api_for_Images';

export default function DetailsScreen(props) {

  const { character } = props.route.params as { character: Character };
  props.navigation.setOptions({ title: character.name });
  const { data, isLoading } = useGetCharacterQuery(character.url);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <Image source={{ uri: data?.image }} style={styles.image} />
      <View style={styles.characterContainer}>
        <Text style={styles.title}>{character.name}</Text>
        <Text style={styles.text}>Birth Year: {character.birth_year}</Text>
        <Text style={styles.text}>Gender: {character.gender}</Text>
        <Text style={styles.text}>Eye Color: {character.eye_color}</Text>
        <Text style={styles.text}>Hair Color: {character.hair_color}</Text>
        <Text style={styles.text}>Height: {character.height} cm</Text>
        <Text style={styles.text}>Mass: {character.mass} kg</Text>
        <Text style={styles.text}>Skin Color: {character.skin_color}</Text>
      </View>

      <Homeworld homeworldURL={character.homeworld} />
      {
        character.species.map((speciesURL, index) => (
          <Species key={index} speciesURL={speciesURL} />
        ))
      }

    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f6f5f3',
  },
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
  characterContainer: {
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
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
    borderRadius: 15,
    alignSelf: 'center'
  }

});
