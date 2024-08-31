import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackNavigatorParamList = {
  Home: undefined;
  Overview: {
    categoryId: string;
  };
  MealDetail: undefined;
};

export type MealCategoriesNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  "Overview"
>;
