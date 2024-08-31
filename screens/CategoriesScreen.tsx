import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";
import Category from "../models/category";
import { NavigationProp } from "@react-navigation/native";
import { MealCategoriesNavigationProp } from "../utils/types";

type Props = { navigation: MealCategoriesNavigationProp };

const CategoriesScreen = ({ navigation }: Props) => {
  const getRenderItem = (item: Category) => {
    const onPressHanlder = () => {
      navigation.navigate("Overview", {
        categoryId: item.id,
      });
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
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => getRenderItem(itemData.item)}
        numColumns={2}
      />
    </View>
  );
};
export default CategoriesScreen;
