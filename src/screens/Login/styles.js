import { StyleSheet } from "react-native"
import color from "../../assets/color"

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: "center",
        paddingHorizontal: 24,
    },  

    introContainer: {
        width: '100%',
    },

    bigIntroContainer: {
        paddingBottom: 12
    },

    bigIntroText: {
        fontSize: 28,
        fontWeight: 600,
        color: color.black
    },

    smallIntroContainer: {
        paddingBottom: 36
    },

    smallIntroText: {
        fontSize: 24,
        fontWeight: 400,
        color: color.black
    },

    inputContainer: {
        width: '100%',
        marginBottom: 72
    },

    input: {
        borderColor: color.silver,
        borderWidth: 1,
        height: 48,
        marginBottom: 20,
        borderRadius: 12,
        fontSize: 16,
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 16,
    },

    button: {
        height: 48,
        backgroundColor: color.blue,
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity:  0.4,
        borderRadius: 8,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: color.white,
        fontWeight: 500,
        fontSize: 16,
    }

})

export default styles
