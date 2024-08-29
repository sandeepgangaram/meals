import { StyleSheet, Text } from "react-native";

interface Props {
  children: React.ReactNode;
}
const SubTitle = ({ children }: Props) => {
  return <Text style={styles.subTitle}>{children}</Text>;
};
export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    color: "brown",
    fontWeight: "bold",
    margin: 4,
    textAlign: "center",
  },
});
