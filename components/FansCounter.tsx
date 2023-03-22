import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function FansCounter() {

    const fans = useSelector((state: any) => state.fans.fans);
    const maleCount = useSelector((state: any) => state.fans.maleCount);
    const femaleCount = useSelector((state: any) => state.fans.femaleCount);
    const otherCount = useSelector((state: any) => state.fans.otherCount);
    console.log(otherCount, maleCount, femaleCount)
    return (
        <View style={styles.container}>
            <View style={styles.countDisplay}>
                <Text style={styles.countNumber}>{femaleCount}</Text>
                <Text style={styles.countText}>Female Fans</Text>
            </View>
            <View style={styles.countDisplay}>
                <Text style={styles.countNumber}>{maleCount}</Text>
                <Text style={styles.countText}>Male Fans</Text>
            </View>
            <View style={styles.countDisplay}>
                <Text style={styles.countNumber}>{otherCount}</Text>
                <Text style={styles.countText}>Other Fans</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: 500,
    },
    countDisplay: {
        backgroundColor: "#fff",
        margin: 10,
        padding: 10,
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
    countNumber: {
        fontSize: 30,
        fontFamily: "Inter_400Regular"
    },
    countText:{
        fontSize: 16,
        fontFamily: "Inter_400Regular"
    }
});