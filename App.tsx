import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";
import { RootStackNavigatorParamList } from "./utils/types";
import MealDetail from "./screens/MealDetail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "brown",
        },
        sceneContainerStyle: {
          backgroundColor: "#ffffff",
        },
        drawerContentStyle: {
          backgroundColor: "brown",
        },
        drawerActiveTintColor: "black",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#FFE4C4",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="category" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
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
          name="Home"
          component={DrawerNavigator}
          options={{
            // title: "All Categories",
            headerShown: false,
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
        <Stack.Screen
          name="MealDetail"
          component={MealDetail}
          // options={{
          //   headerRight: () => <Button title="Tap Me" />,
          // }}
        />
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
