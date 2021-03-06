import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from 'react-native-reanimated';


const OrdersScreen = ({ navigation }) => {
    const [order1, setOrder1] = useState();
    const [order2, setOrder2] = useState();
    const [order3, setOrder3] = useState();
    const products = [
        {
            key: 1,
            name: 'Apple',
            price: 10.00,
            quantity: '1 kg',
        },
        {
            key: 2,
            name: 'Dried',
            price: 20.00,
            quantity: '5 kg',
        },
        {
            key: 3,
            name: 'Cabbage',
            price: 45.99,
            quantity: '3 kg',
        },
        {
            key: 4,
            name: 'Eggs',
            price: 15.00,
            quantity: '1/2 kg',
        },
        {
            key: 5,
            name: 'Pasta',
            price: 13,
            quantity: '1/2 kg',
        },
    ];

    return (
        <View>
            <Text style={styles.title}> Your Orders </Text>
            <View style={styles.accordion}>
                <TouchableOpacity onPress={(value) => setOrder1(!order1)}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ color: colors.darkGray, fontSize: 17 }}>Orden #4567</Text>
                        <Icon name="chevron-down" color={colors.gray} style={{ alignSelf: "center" }}></Icon>
                    </View>
                    <View style={[order1 ? { display: "flex" } : { display: "none" }, { marginTop: 10 }]}>
                        <View style={[styles.accordionItem, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 16, color: colors.darkGray }}>{products[0].name}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>{products[0].quantity}</Text>
                                <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[0].price}</Text>
                            </View>
                        </View>
                        <View style={[styles.accordionItem, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 16, color: colors.darkGray }}>{products[1].name}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>{products[1].quantity}</Text>
                                <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[1].price}</Text>
                            </View>
                        </View>
                        <View style={[styles.accordionItem, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 16, color: colors.darkGray }}>{products[2].name}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>{products[2].quantity}</Text>
                                <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[2].price}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <View style={[styles.accordionItem, { flexDirection: "row", justifyContent: "flex-end" }]}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>Delivery</Text>
                                    <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[3].price}</Text>
                                </View>
                            </View>
                            <View style={[styles.accordionItem, { flexDirection: "row", justifyContent: "flex-end" }]}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30, }}>Total</Text>
                                    <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[4].price}</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: -30 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="check-circle" color={colors.teal} style={{ fontSize: 30, marginRight: 20 }}></Icon>
                                        <Text style={{ fontSize: 16, color: colors.teal }}>Shipped</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
            <View style={styles.accordion}>
                <TouchableOpacity onPress={(value) => setOrder2(!order2)}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ color: colors.darkGray, fontSize: 17 }}>Orden #4567</Text>
                        <Icon name="chevron-down" color={colors.gray} style={{ alignSelf: "center" }}></Icon>
                    </View>
                    <View style={[order2 ? { display: "flex" } : { display: "none" }, { marginTop: 10 }]}>
                        <View style={[styles.accordionItem, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 16, color: colors.darkGray }}>{products[0].name}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>{products[0].quantity}</Text>
                                <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[0].price}</Text>
                            </View>
                        </View>
                        <View style={[styles.accordionItem, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 16, color: colors.darkGray }}>{products[1].name}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>{products[1].quantity}</Text>
                                <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[1].price}</Text>
                            </View>
                        </View>
                        <View style={[styles.accordionItem, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 16, color: colors.darkGray }}>{products[2].name}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>{products[2].quantity}</Text>
                                <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[2].price}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <View style={[styles.accordionItem, { flexDirection: "row", justifyContent: "flex-end" }]}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>Delivery</Text>
                                    <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[3].price}</Text>
                                </View>
                            </View>
                            <View style={[styles.accordionItem, { flexDirection: "row", justifyContent: "flex-end" }]}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30, }}>Total</Text>
                                    <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[4].price}</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: -30 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="check-circle" color={colors.teal} style={{ fontSize: 30, marginRight: 20 }}></Icon>
                                        <Text style={{ fontSize: 16, color: colors.teal }}>Shipped</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
            <View style={styles.accordion}>
                <TouchableOpacity onPress={(value) => setOrder3(!order3)}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ color: colors.darkGray, fontSize: 17 }}>Orden #4567</Text>
                        <Icon name="chevron-down" color={colors.gray} style={{ alignSelf: "center" }}></Icon>
                    </View>
                    <View style={[order3 ? { display: "flex" } : { display: "none" }, { marginTop: 10 }]}>
                        <View style={[styles.accordionItem, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 16, color: colors.darkGray }}>{products[0].name}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>{products[0].quantity}</Text>
                                <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[0].price}</Text>
                            </View>
                        </View>
                        <View style={[styles.accordionItem, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 16, color: colors.darkGray }}>{products[1].name}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>{products[1].quantity}</Text>
                                <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[1].price}</Text>
                            </View>
                        </View>
                        <View style={[styles.accordionItem, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 16, color: colors.darkGray }}>{products[2].name}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>{products[2].quantity}</Text>
                                <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[2].price}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <View style={[styles.accordionItem, { flexDirection: "row", justifyContent: "flex-end" }]}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30 }}>Delivery</Text>
                                    <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[3].price}</Text>
                                </View>
                            </View>
                            <View style={[styles.accordionItem, { flexDirection: "row", justifyContent: "flex-end" }]}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 16, color: colors.gray, marginRight: 30, }}>Total</Text>
                                    <Text style={{ fontSize: 16, color: colors.darkGray }}>${products[4].price}</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: -30 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="check-circle" color={colors.teal} style={{ fontSize: 30, marginRight: 20 }}></Icon>
                                        <Text style={{ fontSize: 16, color: colors.teal }}>Shipped</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 22,
        color: colors.darkGray,
        padding: 20,
        marginBottom: 20
    },
    accordion: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 13,
        elevation: 20,
    },
    accordionItem: {
        marginTop: 10,
        justifyContent: 'space-between'
    }
})

export default OrdersScreen;
