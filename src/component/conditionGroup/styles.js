
import { StyleSheet } from "react-native"
import color from "../../assets/color"
import { Platform } from "react-native"

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
        shadowColor: color.black,
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
        fontWeight: Platform.OS=='ios'?300:400,
        color: color.black
    },

    data: {
        fontSize: 48,
        fontWeight: 500,
        color: color.black
    },

    unit: {
        fontSize: 24,
        fontWeight: 500,
        color: color.black
    },

    dataContainer: {
        position: "relative",
    },

    condition: {
        paddingBottom: 20,
        color: color.black
    },

    unitContainer: {
        position: "absolute",
        right: '-30%',
        top: 0,
    },

    btn: {
        backgroundColor: color.blue,
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
