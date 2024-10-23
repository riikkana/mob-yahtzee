import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, SafeAreaView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import styles from '../style/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataTable, PaperProvider, Button, DefaultTheme } from "react-native-paper";
import { useFocusEffect } from '@react-navigation/native';
import { horizontalScale, moderateScale, verticalScale } from '../style/Metrics';


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#511e74',
    },
  };

const STORAGE_KEY = '@score_key';

const Scoreboard = ({ navigation, route }) => {
    const [scores, setScores] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const fetchScores = async () => {
                await getData();
            };
            fetchScores();
        }, [])
    );

    useEffect(() => {
        const updateScores = async () => {
            if (route.params?.score && route.params?.player) {
                const newKey = scores.length + 1;
                const newScore = {
                    key: newKey.toString(),
                    player: route.params.player,
                    score: route.params.score,
                };

                const newScores = [...scores, newScore];
                const sortedScores = newScores.sort((a, b) => b.score - a.score);
                await storeData(sortedScores);
                setScores(sortedScores);
            }
        };

        updateScores();
    }, [route.params?.score, route.params?.player]);

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
        } catch (e) {
            console.log('Error storing data:', e);
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
            if (jsonValue !== null) {
                const storedScores = JSON.parse(jsonValue);
                const sortedScores = storedScores.sort((a, b) => b.score - a.score);
                setScores(sortedScores);
            } else {
                setScores([]);
            }
        } catch (e) {
            console.log('Error retrieving data:', e);
        }
    };

    const clearScores = async () => {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            setScores([]); 
        } catch (e) {
            console.log('Error clearing data:', e);
        }
    };

    return (
        <SafeAreaView style={styles.homescreen}>
            <PaperProvider theme={theme}>
                <Header />
                
                <View style={styles.container}>
                    <Text style={styles.title}>Hall of Fame</Text>
                    {<DataTable >
                        <DataTable.Header style={styles.headerCell}>
                            <DataTable.Title>#</DataTable.Title>
                            <DataTable.Title>Player</DataTable.Title>
                            <DataTable.Title>Points</DataTable.Title>
                        </DataTable.Header>

                        {scores.map((item, index) => (
                            <DataTable.Row style={styles.cell} key={item.key}>
                                <DataTable.Cell>{index + 1}</DataTable.Cell>
                                <DataTable.Cell>{item.player}</DataTable.Cell>
                                <DataTable.Cell>{item.score}</DataTable.Cell>
                            </DataTable.Row>
                        ))}
                    </DataTable>}
                    <Button 
                        mode="outlined" 
                        icon="delete"
                        onPress={clearScores} 
                        style={styles.clearButton}>
                        Clear Scoreboard
                    </Button>
                </View>
            </PaperProvider>
        </SafeAreaView>
    );
};

export default Scoreboard;