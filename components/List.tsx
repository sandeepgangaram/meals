import { StyleSheet, Text, View } from "react-native";

interface Props {
  data: string[];
}
const List = ({ data }: Props) => {
  return (
    <View>
      {data?.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};
export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: "brown",
  },
  itemText: {
    color: "white",
    textAlign: "center",
  },
});
