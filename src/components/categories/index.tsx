import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

interface Props {
  selected: string;
  onChangeCategory: (item: string) => void;
}

export function Categories({ selected, onChangeCategory }: Props) {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          isSelected={item.name === selected}
          icon={item.icon}
          onPress={() => onChangeCategory(item.name)}
        />
      )}
    />
  );
}
