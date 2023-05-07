
import { StyleSheet } from "react-native"
import color from "../../assets/color"

const styles = StyleSheet.create({
    section: {
        backgroundColor: color.white,
        minHeight: 60,
        width: '100%',
        marginTop: 32,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 40,
        borderRadius: 8,
    },

    inactiveSection: {
        backgroundColor: color.lightSilver,
        minHeight: 60,
        width: '100%',
        marginTop: 32,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 40,  
        borderRadius: 8,
    },

    boxShadow: {
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity:  0.4,
        elevation: 5,
    },

    deviceContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    deviceNameContainer: {
        paddingLeft: 12
    },

    deviceName: {
        fontSize: 16,
        fontWeight: 500,
        color: color.black
    }

})

export default styles
