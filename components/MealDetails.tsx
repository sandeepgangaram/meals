import { Text, View, StyleSheet } from "react-native";
import meal from "../models/meal";

interface Props {
  affordability: string;
  duration: number;
  complexity: string;
}
const MealDetails = ({ affordability, complexity, duration }: Props) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailText}>{duration}m</Text>
      <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
    </View>
  );
};
export default MealDetails;

const styles = StyleSheet.create({
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
