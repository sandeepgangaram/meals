import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MealsStackNavigatorParamList = {
  Categories: undefined;
  Overview: undefined;
};

export type MealCategoriesNavigationProp = NativeStackNavigationProp<
  MealsStackNavigatorParamList,
  "Overview"
>;
