import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Meal from "../models/meal";
import MealDetails from "./MealDetails";

interface Props {
  meal: Meal;
  onPress: () => void;
}
const MealItem = ({ meal, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.onPress}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealDetails
            affordability={meal.affordability}
            complexity={meal.complexity}
            duration={meal.duration}
          />
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    //ios
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 8, height: 2 },
    shadowRadius: 16,
  },
  onPress: {
    opacity: 0.75,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
});
