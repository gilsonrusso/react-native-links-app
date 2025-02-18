import { Category } from "@/components/category";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity activeOpacity={0.8}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Category isSelected name="Projetos" icon="code" />
      <Category isSelected={false} name="Site" icon="language" />
      <Category isSelected={false} name="Video" icon="movie" />
    </View>
  );
}
