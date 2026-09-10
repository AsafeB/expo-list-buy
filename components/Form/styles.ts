import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  label: {},
  input: {
    backgroundColor: colors.surface,
    borderRadius: 4,
    height: 40,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  button: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    backgroundColor: colors.azul500,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    gap: 4,
  },
  buttonText: {
    color: colors.surface,
    textAlign: "center",
    fontSize: 16,
  },
});
