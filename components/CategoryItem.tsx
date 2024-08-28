import { Pressable, StyleSheet, Text, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";

interface Props {
  text: string;
  color: string;
  onPress: () => void;
}
const CategoryItem = ({ text, color, onPress }: Props) => {
  // const navigation = useNavigation();
  // navigation.navigate("Overview");
  const containerStyle = {
    backgroundColor: color,
    borderColor: color,
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        style={({ pressed }) => [styles.press, pressed && { opacity: 0.5 }]}
        android_ripple={{ color: "#eee" }}
        onPress={onPress}
      >
        <View>
          <Text style={styles.title}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderRadius: 8,
    margin: 16,
    elevation: 4,
  },
  press: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
