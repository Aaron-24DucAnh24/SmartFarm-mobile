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
                    source={{
                        uri: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/227442517_1522592121412142_6450161726159359699_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kzYz_fHmv7YAX8CxnLi&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAgUjnq0cr8CiPB_imfm7-rKAsyI9BUe5lW0R63h_HtoA&oe=643F3A18',
                    }}
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
