
import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-evenly",
        paddingTop: 24,
        paddingHorizontal: 24
    },

    screenNameContainer: {
        paddingTop: 16
    },

    screenName: {
        fontSize: 28,
        fontWeight: 600
    },
})

export default styles
