import { StyleSheet, Platform } from "react-native"

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        minHeight: 54,
        width: '100%',
        marginBottom: 20,
        display: "flex",
        justifyContent: 'flex-start',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity:  0.4,
        borderRadius: 8,
        elevation: 5,
    },

    timeContainer: {
        width: 140,
    },

    topicContainer: {
        flex: 1,
        paddingLeft: 8
    },

    dataContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },

    timeText: {
        fontSize: 14,
        fontWeight: 400
    },

    topicText: {
        fontSize: 14,
        fontWeight: 800
    },

    dataText: {
        fontSize: Platform.OS=='ios'?13:14,
        fontWeight: 700
    },

    dataTextDanger: {
        fontSize: Platform.OS=='ios'?13:14,
        fontWeight: 800,
        color: 'red'
    }

})