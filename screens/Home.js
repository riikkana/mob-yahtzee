import { useState } from "react";
import { Text, View, Pressable, Keyboard, SafeAreaView } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Button, PaperProvider, TextInput } from "react-native-paper";
import Header from "./Header";
import Footer from "./Footer";
import {
    NBR_OF_DICE,
    NBR_OF_THROWS,
    MIN_SPOT,
    MAX_SPOT,
    BONUS_POINTS,
    BONUS_POINTS_LIMIT
} from "../constants/Game";
import styles from '../style/style';
import { useFonts } from 'expo-font';


const Home = ({ navigation }) => {

    const [playerName, setPlayerName] = useState('');
    const [hasPlayername, setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

    const [loaded] = useFonts({
        Ubuntu: require('../assets/fonts/Ubuntu-Medium.ttf'),
    });

    if (!loaded) {
        return null;
    }


    return (
        <SafeAreaView style={styles.homescreen}>
            <PaperProvider>
                <Header />
                <View style={styles.content}>
                    {!hasPlayername ?
                        <>
                            <MaterialCommunityIcons
                                name="human-greeting"
                                size={90}
                                color="#511e74"/>
                            <Text style={styles.title}>
                                Welcome to the Mini-Yahtzee Game!
                            </Text>
                            <Text style={styles.goodLuck}>
                                First, enter your name for the scoreboard:
                            </Text>
                            <TextInput
                                label="Player Name"
                                style={styles.textInput}
                                onChangeText={setPlayerName}
                                autoFocus={true} />
                            <Button
                                style={styles.playButton}
                                mode="contained"
                                onPress={() => handlePlayerName(playerName)}>
                                Continue</Button>
                        </>
                        :
                        <>
                            <Text style={styles.title}>Rules of the game</Text>
                            <Text style={styles.rules}>
                                THE GAME
                            </Text>
                            <Text style={styles.rules}>
                                This is the upper section of the classic Yahtzee
                                dice game. You have {NBR_OF_DICE} dices and
                                on every round you have {NBR_OF_THROWS} throws.
                                After each throw you can keep dices in
                                order to get same dice spot counts as many as
                                possible. In the end of the turn you must select
                                your points from {MIN_SPOT} to {MAX_SPOT}.
                                Game ends when all points have been selected.
                                The order for selecting those is free.
                            </Text>
                            <Text style={styles.rules}>
                                POINTS
                            </Text>
                            <Text style={styles.rules}>
                                After each round game calculates the sum
                                for the dices you selected. Only the dices having
                                the same spot count are calculated. Inside the
                                game you can not select same points
                                from {MIN_SPOT} to {MAX_SPOT} again.
                            </Text>
                            <Text style={styles.rules}>
                                GOAL
                            </Text>
                            <Text style={styles.rules}>
                                To get points as much as possible.

                            </Text>
                            <Text style={styles.goodLuck}>
                                Good luck, {playerName}!
                            </Text>
                            <Button
                                style={styles.playButton}
                                mode="contained"
                                onPress={() => navigation.navigate('Gameboard', { player: playerName })}>
                                PLAY</Button>
                        </>
                    }
                </View>
                <Footer />
            </PaperProvider>
        </SafeAreaView >
    );
}

export default Home;