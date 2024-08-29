import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  icon: any;
  color: string;
  size: number;
  onPress: () => void;
}
const IconButton = ({ icon, color, size = 24, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
};
export default IconButton;
