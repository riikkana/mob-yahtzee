import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, SafeAreaView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import styles from '../style/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataTable } from "react-native-paper";
import { useFocusEffect } from '@react-navigation/native';

// 'focus' event listener when coming to screen
// also here https://reactnavigation.org/docs/function-after-focusing-screen/

// datatable of react-native-paper
// sorting scoreboard use sort()

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


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <Text>Scoreboard:</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>#</DataTable.Title>
            <DataTable.Title>Player</DataTable.Title>
            <DataTable.Title>Points</DataTable.Title>
          </DataTable.Header>

          {scores.map((item, index) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell>{index + 1}</DataTable.Cell>
              <DataTable.Cell>{item.player}</DataTable.Cell>
              <DataTable.Cell>{item.score}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Scoreboard;