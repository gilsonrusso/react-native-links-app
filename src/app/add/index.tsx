import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { linkStorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { router } from "expo-router";
import { useState } from "react";
import { styles } from "./styles";

export default function Add() {
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [category, setCategory] = useState<string>(categories[0].name);

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione a selecionada.");
      }
      if (!name.trim()) {
        return Alert.alert("Nome", "Informe o nome.");
      }
      if (!url.trim()) {
        return Alert.alert("URL", "Informe a URL.");
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      });

      Alert.alert("Successo", "Novo link adicionado.", [
        { text: "Ok", onPress: () => router.back() },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar o link.");

      console.log("Erro", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories onChangeCategory={setCategory} selected={category} />
      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input placeholder="URL" onChangeText={setUrl} autoCapitalize="none" />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
