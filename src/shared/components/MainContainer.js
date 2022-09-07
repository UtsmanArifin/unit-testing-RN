import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const MainContainer = ({hint='', children}) => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent style='auto'/>
            <View accessibilityHint={hint} style={{flex: 1}}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
  });

export default MainContainer;