import { GlobalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  button: {
    padding: 8,
    borderRadius: 24,
    marginHorizontal: 8,
    marginVertical: 2,
  },
});
