import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Task} from "./Task";

export const TodoList = () => {
    return (
        <View style={styles.todo}>
            <Text style={styles.todoTitle}>
                Todos title
            </Text>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </View>
    );
};

const styles = StyleSheet.create({
    todo: {
        width: '100%',
        backgroundColor: '#6a67cec9',
        borderRadius: 20,
        marginBottom: 20,
    },
    todoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
        padding: 10,

    },

})