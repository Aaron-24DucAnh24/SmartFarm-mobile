
import { StyleSheet } from "react-native"

const color = {
    darkBlue: '#2a78e4',
    white: '#ffffff'
}

const styles = StyleSheet.create({

    section: {
        backgroundColor: color.white,
        height: 128,
        width: '100%',
        marginTop: 36,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 44,
    },

    boxShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity:  0.4,
        borderRadius: 8,
        elevation: 5,
    },

    dataPart: {
        height: '100%',
        justifyContent: "center",
        alignItems: "baseline",
    },

    conditionText: {
        fontSize: 18,
        fontWeight: 300
    },

    data: {
        fontSize: 48,
        fontWeight: 500,
    },

    unit: {
        fontSize: 24,
        fontWeight: 500
    },

    dataContainer: {
        position: "relative",
    },

    condition: {
        paddingBottom: 20
    },

    unitContainer: {
        position: "absolute",
        right: '-30%',
        top: 0,
    },

    btn: {
        backgroundColor: color.darkBlue,
        height: 40,
        width: 110,
        borderRadius: 8,
        justifyContent: "center",
        position: 'relative',
        paddingHorizontal: 8,
    },

    btnText: {
        fontSize: 18,
        color: color.white,
        fontWeight: 500,
    },

    postFixWrapper: {
        position: "absolute",
        right: 8
    },
})

export default styles
