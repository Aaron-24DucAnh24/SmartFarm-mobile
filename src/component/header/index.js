import { View, Image, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import styles from "./style";
import { useState } from "react";

function Header (props) {
    const [showLogout, setShowLogout] = useState(false)

    function handleShowLogout () {
        setShowLogout(!showLogout)
    }

    return  (
        <View style={styles.header}>
            <TouchableOpacity style={styles.icon}>
                <Icon name="navicon" size={60} color={'#000'}/>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.avatarContainer}
                onPress={handleShowLogout}
            >
                <Image
                    style = {styles.avatar}
                    source={require('../../assets/avatar.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity 
                style={showLogout?styles.logoutBtn_show:styles.logoutBtn_hidden}
                onPress={()=>props.nav.navigate('login')}
            >
                <Text style={styles.logoutBtnText}>Logout</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Header
