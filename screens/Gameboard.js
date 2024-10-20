import { useEffect, useState } from "react";
import { Text, View, Pressable, SafeAreaView } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import Header from "./Header";
import Footer from "./Footer";
import styles from '../style/style';
import { Container, Row, Col } from "react-native-flex-grid";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
  NBR_OF_DICE,
  NBR_OF_THROWS,
  MIN_SPOT,
  MAX_SPOT,
  BONUS_POINTS,
  BONUS_POINTS_LIMIT
} from "../constants/Game";

const MAX_ROUNDS = 6;
let board = [];


export default Gameboard = ({ navigation, route }) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('Throw dice');
  const [gameEndStatus, setGameEndStatus] = useState(false);
  const [isPointsSelected, setIsPointsSelected] = useState(false);

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

  useEffect(() => {
    if (playerName === '' && route.params?.player) {
      setPlayerName(route.params.player);
    }
  }, []);

  // useeffect for handling the arriving from another screen
  // because you need to read the scoreboard in order to update
  // new points there

  // useeffect for handling the gameflo. In this one teacher has
  // nbrOfThrowsLeft in the end of the useEffect to fire useEffect
  // when nbrOfThrowsLeft changes


  const row = [];
  for (let dice = 0; dice < NBR_OF_DICE; dice++) {
    row.push(
      <Col key={"row" + dice}>
        <Pressable
          key={"row" + dice}
          onPress={() => selectDice(dice)}>
          <MaterialCommunityIcons
            name={board[dice]}
            key={"row" + dice}
            size={50}
            color={getDiceColor(dice)}
          >
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
    );
  }

  const pointsRow = [];
  for (let spot = 0; spot < MAX_SPOT; spot++) {
    pointsRow.push(
      <Col key={"pointsRow" + spot}>
        <Text key={"pointsRow" + spot}>{getSpotTotal(spot)}</Text>
      </Col>
    );
  }

  const pointsToSelectRow = [];
  for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
    pointsToSelectRow.push(
      <Col key={"buttonsRow" + diceButton}>
        <Pressable
          key={"buttonsRow" + diceButton}
          onPress={() => selectDicePoints(diceButton)}>
          <MaterialCommunityIcons
            key={"buttonsRow" + diceButton}
            name={"numeric-" + (diceButton + 1) + "-circle"}
            size={35}
            color={getDicePointsColor(diceButton)}>
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
    );
  }

  function getDiceColor(i) {
    if (board.every((val, i, arr) => val === arr[0])) {
      return "orange";
    }
    else {
      return selectedDices[i] ? "#e4773c" : "#af53bd";
    }
  }

  function getDicePointsColor(i) {
    return selectedDicePoints[i] ? "#e4773c" : "#af53bd";
  }

  const selectDicePoints = (i) => {
    if (nbrOfThrowsLeft === 0) {
      let selectedPoints = [...selectedDicePoints];
      let points = [...dicePointsTotal];
      if (!selectedPoints[i]) {
        selectedPoints[i] = true;
        let nbrOfDice = diceSpots.reduce(
          (total, x) => (x === (i + 1) ? total + 1 : total), 0);
        points[i] = nbrOfDice * (i + 1);
        setDicePointsTotal(points);
        setSelectedDicePoints(selectedPoints);
        setIsPointsSelected(true);
        setNbrOfThrowsLeft(NBR_OF_THROWS);
        if (currentRound < MAX_ROUNDS) {
          setCurrentRound(prev => prev + 1);
        } else {
          // Pelin loppu ja tallennetaan pisteet scoreboardille
          handleGameEnd();

          //return points[i];
        }
      } else {
        setStatus("You already selected points for " + (i + 1));
      }
    }
    else {
      setStatus("Throw " + NBR_OF_THROWS + " times before setting points.")
    }
  }

  const selectDice = (i) => {
    let dices = [...selectedDices];
    dices[i] = selectedDices[i] ? false : true;
    setSelectedDices(dices);
  }

  const throwDices = () => {
    if (nbrOfThrowsLeft > 0 && !isPointsSelected) {
      let spots = [...diceSpots];
      for (let i = 0; i < NBR_OF_DICE; i++) {
        if (!selectedDices[i]) {
          let randomNumber = Math.floor(Math.random() * MAX_SPOT + 1);
          spots[i] = randomNumber;
          board[i] = 'dice-' + randomNumber;
        }
      }
      setDiceSpots(spots);
      setNbrOfThrowsLeft(prev => prev - 1);
      if (nbrOfThrowsLeft === 1) {
        setIsPointsSelected(false); // Estä seuraava heitto, kun pisteet on valittava
      }
    } else {
      setStatus("No throws left! Select points to continue.");
    }
  }

    function getSpotTotal(i) {
      return dicePointsTotal[i];
    }

    const calculateTotalScore = () => {
      return dicePointsTotal.reduce((acc, score) => acc + score, 0);
    };

    const handleGameEnd = () => {
      setGameEndStatus(true);
      //  scoreboardille tallentamiseksi
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider>
          <Header />
          <View style={styles.container}>
            <Container>
              <Row style={styles.row}>{row}</Row>
            </Container>
            <Text style={styles.textStatus}>{status}</Text>
            <Button
              icon="dice-multiple"
              mode="contained"
              onPress={() => throwDices()}>
              THROW DICE</Button>
            <Text style={styles.textStatus}>Throws left: {nbrOfThrowsLeft}</Text>
            <Container>
              <Row style={styles.pointsRow}>{pointsRow}</Row>
            </Container>
            <Container>
              <Row style={styles.row}>{pointsToSelectRow}</Row>
            </Container>
            <Text>Total points: {calculateTotalScore()}</Text>
            <Text>Current Round: {currentRound}/{MAX_ROUNDS}</Text>
            <Text>Player name: {playerName}</Text>
          </View>
          <Footer />
        </PaperProvider>
      </SafeAreaView>
    )
  }