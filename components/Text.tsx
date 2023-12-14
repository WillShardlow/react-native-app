import { ReactNode } from "react";
import { StyleSheet, Text as NativeText } from "react-native";

type TextProps = {
  children: ReactNode;
};

export const Text = ({ children }: TextProps) => (
  <NativeText style={styles.text}>{children}</NativeText>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "Helvetica",
    fontSize: 20,
  },
});
