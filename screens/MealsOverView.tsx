import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

interface Props {
  route?: { params: { categoryId: string } };
  navigation: any;
}
const MealsOverView = ({ route, navigation }: Props) => {
  // const route = useRoute();
  // console.log(route);
  const categoryId = route?.params.categoryId ?? "";
  // console.log(categoryId);

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  const selectedMeal = CATEGORIES.find((cat) => cat.id === categoryId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal?.title,
    });
  }, []);

  const onPressHanlder = (id: string) => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return <MealsList items={meals} onPress={onPressHanlder} />;
};
export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
  },
});
