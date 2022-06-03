import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

export const AddItemForm = () => {
    const [title, setTitle] = useState('')

    return (
        <>
            <TextInput value={title} onChangeText={setTitle} placeholder={'Enter text'} style={styles.input}/>
            <Button title='Add' onPress={() => alert(title)}/>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        borderStyle: "solid",
        borderColor: '#5b55cb',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
})