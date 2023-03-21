
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from '../types';
import { Gender } from '../types';

export default function FansCounter() {

    const dispatch = useDispatch();
    const fans: Character[] = useSelector((state: any) => state.fans);

    return (
        <View>
            <Text>{JSON.stringify(fans)}</Text>
            {/* <View>
                <Text>{fans.filter((character) => character.gender == Gender.Male).length}</Text>
                <Text>Male Fans</Text>
            </View>

            <View>
                <Text>{fans.filter((character) => character.gender == Gender.Female).length}</Text>
                <Text>Female Fans</Text>
            </View>

            <View>
                <Text>{fans.filter((character) => character.gender == Gender.NA).length}</Text>
                <Text>Other Fans</Text>
            </View> */}
        </View>
    )

}

const styles = StyleSheet.create({});