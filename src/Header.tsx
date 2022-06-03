import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.loginText}>LOG OUT</Text>
            <Text style={styles.title}> Todo List </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 200,
        width: '100%',
        backgroundColor: '#5b55cb',
        color: 'white',
        paddingTop: 60,
        paddingHorizontal: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    title: {
        color: 'white',
        fontSize: 36,
        alignSelf: "center",
        padding: 30,
    },
})