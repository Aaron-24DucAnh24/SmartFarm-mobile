
import { StyleSheet } from "react-native"
import { Platform } from "react-native"
import color from "../../assets/color"

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        marginTop: Platform.OS=='ios'?24:4,
        justifyContent: "space-between",
        flexDirection: "row",
    },

    avatarContainer: {
        height: '100%',
        width: 50,
        borderRadius: 50,
        overflow: 'hidden',
    },

    avatar: {
        height: 50,
        width: 50,
    }, 

    logoutBtn_hidden: {
        display: "none"
    },

    logoutBtn_show: {
        backgroundColor: color.white,
        height: 50,
        width: 140,
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity:  0.4,
        borderRadius: 8,
        elevation: 10,
        justifyContent: "center",
        alignItems: 'center',
        position: 'absolute',
        left: '40%'
    },

    logoutBtnText: {
        fontSize: 16,
        fontWeight: 500,
        color: color.black
    }
})

export default styles
