import { Button } from "react-native-paper"
import { StyleSheet } from "react-native"
import { clearFans } from "../store/fansSlice"
import { useDispatch } from "react-redux"

export default function ClearFans() {
    const dispatch = useDispatch()
    return (
        <Button style={styles.clear} textColor={"#FF2A24C7"} onPress={() => dispatch(clearFans())} >CLEAR FANS</Button>
    )
}

const styles = StyleSheet.create({
    clear: {
        borderWidth: 1,
        borderColor: '#FF2A24C7',
        borderRadius: 5,
        marginRight: 10,
        zIndex: 44,
    }
})