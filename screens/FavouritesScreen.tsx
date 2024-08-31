import { useContext } from "react";
import { FavouritesContext } from "../store/context/favouritesContext";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  navigation?: any;
}
const FavouritesScreen = ({ navigation }: Props) => {
  const { favouriteIds } = useContext(FavouritesContext);

  const meals = MEALS.filter((meal) => favouriteIds.includes(meal.id));

  const onPressHanlder = (id: string) => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  if (meals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nope. No Favourites.</Text>
      </View>
    );
  }
  return <MealsList items={meals} onPress={onPressHanlder} />;
};
export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
