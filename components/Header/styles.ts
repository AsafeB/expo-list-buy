import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    height: 100,
  },
  title: {
    fontSize: colors.titulo,
    textAlign: "center",
    color: colors.vermelho500,
    fontWeight: "bold",
  },
});