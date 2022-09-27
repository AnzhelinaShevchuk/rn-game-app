import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function PressHandler() {
    console.log("Pressed!");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.buttonText]
            : styles.buttonInnerContainer
        }
        onPress={PressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    pverflow: "hidden",
  },

  buttonInnerContainer: {
    borderRadius: 28,
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
