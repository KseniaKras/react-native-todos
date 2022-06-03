import {StatusBar} from 'expo-status-bar';
import {Button, ListRenderItem, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import {Todos} from "./src/Todos";
import {Header} from "./src/Header";
import {AddItemForm} from "./src/AddItemForm";


type ArrType = {
    id: number
    name: string
    age: number
}
const arr: ArrType[] = new Array(100).fill(null).map((el, i) => ({
    id: i + 1,
    name: 'Ksenia' + (i + 1),
    age: 26,
}))


export default function App() {

    const [isSelected, setSelection] = useState(false);

    const render: ListRenderItem<ArrType> = ({item}) => {
        return <View>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
        </View>
    }


    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <AddItemForm/>
                <Todos/>
            </View>

            {/*/!*<Text>{JSON.stringify(arr, null , 2)}</Text>*!/*/}
            {/*<FlatList*/}
            {/*    data={arr}*/}
            {/*    renderItem={render}*/}
            {/*    keyExtractor={(item) => item.id.toString()}*/}
            {/*/>*/}
            <StatusBar style="inverted"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5b55cb'
    },
    content: {
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderRadius: 50,
        backgroundColor: '#f1f4ff',
        padding: 20,
    },


});
