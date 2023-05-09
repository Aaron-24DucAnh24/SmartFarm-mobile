import color from "../../assets/color"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    container: {
        backgroundColor: color.white,
        width: '100%',
        marginTop: 32,
        display: "flex",
        paddingHorizontal: 40,
        borderRadius: 8,
    },

    boxShadow: {
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity:  0.4,
        elevation: 5,
    },

    firstLine: {
        flexDirection: "row",
        marginTop: 12,
        alignItems: "center",
        marginBottom: 12, 
        justifyContent: "space-between"
    },

    firstRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    firstLineText: {
        color: color.black,
        fontSize: 16,
        paddingLeft: 10,
        fontWeight: "500"
    },

    submitButton: {
        backgroundColor: color.blue,
        height: 32,
        width: 65,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center" , 

    },

    submitText: {
        color: color.white,
        fontWeight: '500',
        fontSize: 16, 
    },

    secondLine: {
        flexDirection: "column",
        paddingBottom: 12, 
    },

    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
    },

    itemText: {
        fontSize: 16,
        fontWeight: '400',
        color: color.black
    },

    input: {
        borderColor: color.silver,
        borderWidth: 1,
        height: 32,
        borderRadius: 6,
        paddingVertical: 0,
        fontSize: 16,
        display: "flex",
        alignItems: "center",
        width: "40%",
        paddingHorizontal: 12,
    }

})

export default styles
