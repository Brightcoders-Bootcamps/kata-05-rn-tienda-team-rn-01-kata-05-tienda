import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomMenu = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="storefront-outline" size={30} color="#A6BCD0"></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="star-box-multiple-outline" size={30} color="#A6BCD0"></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="plus-circle" size={70} color="#A6BCD0" style={[styles.active, {
                    marginTop: -20, paddingRight: 10,
                    paddingLeft: 10,
                }]}></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="cart-outline" size={30} color="#A6BCD0"></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="bell-outline" size={30} color="#A6BCD0"></Icon>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: -20,
        marginLeft: 45,
        marginRight: 45,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    active: {
        paddingBottom: 5,
        borderBottomWidth: 5,
        borderRadius: 2,
        borderBottomColor: "#3CB3AB"
    }
});

export default BottomMenu;
