import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";
import Category from "../models/category";
import { NavigationProp } from "@react-navigation/native";
import { MealCategoriesNavigationProp } from "../utils/types";

type Props = { navigation: MealCategoriesNavigationProp };

const CategoriesScreen = ({ navigation }: Props) => {
  const getRenderItem = (item: Category) => {
    const onPressHanlder = () => {
      navigation.navigate("Overview");
    };
    return (
      <CategoryItem
        text={item.title}
        color={item.color}
        onPress={onPressHanlder}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => getRenderItem(itemData.item)}
      numColumns={2}
    />
  );
};
export default CategoriesScreen;
