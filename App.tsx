impoprt { useState } from "react"
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ListaItens from "./components/ListaItens/ListaItens";
import { colors } from "./components/colors";
import { ProdutoItem } from "./interfaces/ProdutoItem";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Form />
        <ListaItens />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
