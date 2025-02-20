import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variante?: "primary" | "secondary";
};

export function Option({ name, icon, variante = "primary", ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={variante === "primary" ? colors.green[300] : colors.gray[400]}
      />
      <Text
        style={
          variante === "primary" ? styles.primaryTitle : styles.secondaryTitle
        }
        numberOfLines={1}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
{
  /* <View style={styles.container}>
  <View style={styles.details}>
    <Text style={[styles.name]} numberOfLines={1}>
      {name}
    </Text>
    <Text style={[styles.url]} numberOfLines={1}>
      {url}
    </Text>
  </View>
</View>; */
}
