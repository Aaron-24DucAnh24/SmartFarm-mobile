
import { StyleSheet } from "react-native"
import {Dimensions} from 'react-native';
import color from "../../assets/color";


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-evenly",
        paddingTop: 24,
        paddingHorizontal: 24,
    },

    screenNameContainer: {
        paddingTop: 16,
        paddingBottom: 32,
    },

    screenName: {
        fontSize: 28,
        fontWeight: 600,
        color: color.black
    },

    scrollView: {
        width: Dimensions.get('window').width,
        height: '70%',
        paddingHorizontal: 24,
    }
})

export default styles
