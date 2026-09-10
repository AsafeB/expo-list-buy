import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: colors.surface,
    flex: 1,
    marginTop: 10,
    paddingTop: 30,
    paddingHorizontal: 12,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: colors.border,
  },
  buttonTopBar: { flexDirection: "row", gap: 10 },
});
