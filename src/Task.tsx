import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

export const Task = () => {
    return (
        <View style={styles.tasksBlock}>
            <Text style={styles.taskText}>Task Text</Text>
            <Button title={'delete'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    tasksBlock: {
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskText: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 10

    },
})