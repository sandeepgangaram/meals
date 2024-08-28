import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";
import { RootStackNavigatorParamList } from "./utils/types";

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();
export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Overview" component={MealsOverView} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#241805",
    alignItems: "center",
    justifyContent: "center",
  },
});
