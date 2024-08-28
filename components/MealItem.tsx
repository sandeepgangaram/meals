import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import Meal from "../models/meal";
import { InnerScreen } from "react-native-screens";

interface Props {
  meal: Meal;
}
const MealItem = ({ meal }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailText}>{meal.duration}m</Text>
            <Text style={styles.detailText}>
              {meal.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailText}>
              {meal.affordability.toUpperCase()}
            </Text>
          </View>
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
  details: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  detailText: {
    fontSize: 12,
    margin: 8,
    marginTop: 0,
  },
});
