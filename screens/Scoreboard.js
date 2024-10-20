import { Text, View, SafeAreaView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import styles from '../style/style';

// todo async storage codes in github (todo-v2)
// 'focus' event listener when coming to screen

export default Scoreboard = ({ navigation }) => {
    return(
      <SafeAreaView style={{flex:1}}>
        <Header />
        <View style= {styles.container}>
            <Text>Scoreboard will be here...</Text>
        </View>
        <Footer />
        </SafeAreaView>
    )
}