import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

interface Props {
  route?: { params: { categoryId: string } };
}
const MealsOverView = ({ route }: Props) => {
  // const route = useRoute();
  // console.log(route);
  const categoryId = route?.params.categoryId ?? "";
  // console.log(categoryId);

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  return (
    <View>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <MealItem meal={item.item} />}
      />
    </View>
  );
};
export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
  },
});
