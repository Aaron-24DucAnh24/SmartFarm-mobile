import { StyleSheet, Platform } from "react-native"
import color from "../../assets/color"

export default styles = StyleSheet.create({
    container: {
        backgroundColor: color.white,
        minHeight: 54,
        width: '100%',
        marginBottom: 20,
        display: "flex",
        justifyContent: 'flex-start',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity:  0.4,
        borderRadius: 8,
        elevation: 5,
    },

    timeContainer: {
        width: 140,
    },

    topicContainer: {
        flex: 1.1,
        paddingLeft: Platform.OS=="ios"?0:8,
    },

    dataContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },

    timeText: {
        fontSize: Platform.OS=="ios"?12:14,
        fontWeight: 400,
        color: color.black
    },

    topicText: {
        fontSize: Platform.OS=="ios"?14:16,
        fontWeight: 800,
        color: color.black
    },

    dataText: {
        fontSize: Platform.OS=='ios'?13:14,
        fontWeight: 700,
        color: color.black
    },

    dataTextDanger: {
        fontSize: Platform.OS=='ios'?13:14,
        fontWeight: 800,
        color: color.red
    }

})