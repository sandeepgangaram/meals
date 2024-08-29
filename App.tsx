import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";
import { RootStackNavigatorParamList } from "./utils/types";
import MealDetail from "./screens/MealDetail";

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();
export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "brown",
          },
          contentStyle: {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
          }}
        />
        <Stack.Screen
          name="Overview"
          component={MealsOverView}
          // options={({ route }: { route: any }) => {
          //   const categoryId = route.params?.categoryId;
          //   return {
          //     title: categoryId,
          //   };
          // }}
        />
        <Stack.Screen name="MealDetail" component={MealDetail} />
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
