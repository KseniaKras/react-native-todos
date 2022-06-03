import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import {TodoList} from "./TodoList";

export const Todos = () => {
    return (
        <View style={styles.todos}>
            <ScrollView>
                <TodoList/>
                <TodoList/>
                <TodoList/>
                <TodoList/>
                <TodoList/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    todos: {
        width: '100%',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
    },

})