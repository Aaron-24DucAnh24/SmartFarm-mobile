
import { StyleSheet } from "react-native"

const color = {
    darkBlue: '#2a78e4',
    white: '#ffffff'
}

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
        backgroundColor: 'silver',
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
        shadowColor: '#000',
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
        fontWeight: 500
    }

})

export default styles
