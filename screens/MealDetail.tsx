import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import IconButton from "../components/IconButton";

interface Props {
  route: any;
  navigation: any;
}
const MealDetail = ({ route, navigation }: Props) => {
  const mealId = route?.params.mealId;

  const tapHandler = () => {
    navigation.navigate("Categories");
  };
  const meal = MEALS.find((meal) => meal.id === mealId);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal?.title,
      headerRight: () => (
        <IconButton
          color="white"
          icon={"home"}
          onPress={tapHandler}
          size={24}
        />
      ),
    });
  }, []);

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal?.title}</Text>
      <MealDetails
        affordability={meal?.affordability ?? ""}
        complexity={meal?.complexity ?? ""}
        duration={meal?.duration ?? 0}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={meal?.ingredients ?? []} />
          <SubTitle>Steps</SubTitle>
          <List data={meal?.steps ?? []} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealDetail;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    color: "brown",
    fontWeight: "bold",
    margin: 4,
    textAlign: "center",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
