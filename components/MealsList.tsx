import { View, FlatList } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";
import Meal from "../models/meal";

interface Props {
  items: Meal[];
  onPress: (id: string) => void;
}
const MealsList = ({ items, onPress }: Props) => {
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <MealItem meal={item.item} onPress={() => onPress(item.item.id)} />
        )}
      />
    </View>
  );
};
export default MealsList;
