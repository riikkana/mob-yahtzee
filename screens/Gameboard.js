import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import styles from '../style/style';
import {
  NBR_OF_DICE,
  NBR_OF_THROWS,
  MIN_SPOT,
  MAX_SPOT,
  BONUS_POINTS,
  BONUS_POINTS_LIMIT
} from "../constants/Game";
import { Container, Row, Col } from "react-native-flex-grid";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

let board = [];


export default Gameboard = () => {

  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('Throw dice');
  const [gameEndStatus, setGameEndStatus] = useState(false);
  
  // if dice are selected or not
  const [selectedDices, setSelectedDices] = 
    useState(new Array(NBR_OF_DICE).fill(false));
  // dice spots
  const [diceSpots, setDiceSpots] = 
    useState(new Array(NBR_OF_DICE).fill(0));
  // if dice points are selected or not for spots
  const [selectedDicePoints, setSelectedDicePoints] =
    useState(new Array(MAX_SPOT).fill(false));
  // total points for different spots
  const [dicePointsTotal, setDicePointsTotal] =
    useState(new Array(MAX_SPOT).fill(0));

  const [playerName, setPlayerName] = useState('');

  const row = [];
  for (let dice = 0; dice < NBR_OF_DICE; dice++) {
    row.push(
      <Col key={"row" + dice}>
        <Pressable
          key={"row" + dice}
        //onPress={() => selectDice(dice)}
        >
          <MaterialCommunityIcons
            name={board[dice]}
            key={"row" + dice}
            size={50}
            color={"black"}
          //color={getDiceColor(dice)}
          >
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
    );
  }

  const throwDices = () => {
    for (let i = 0; i < NBR_OF_DICE; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * MAX_SPOT + 1);
        board[i] = 'dice-' + randomNumber;
      }
    }
    setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
  }

  return (
    <>
      <Header />
      <View>
        <Container>
          <Row>{row}</Row>
        </Container>
        <Text>Throws left: {nbrOfThrowsLeft}</Text>
        <Text>{status}</Text>
        <Pressable
          onPress={() => throwDices()}>
            <Text>THROW DICE</Text>
        </Pressable>
      </View>
      <Footer />
    </>
  )
}