import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../componens/ui/PrimaryButton";
import Title from "../componens/ui/Title";
import Card from "../componens/ui/Card";
import InstructionText from "../componens/ui/InstructionText";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHendler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHendler() {
    setEnteredNumber("");
  }

  function confirmInputHendler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Ivalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "OK", style: "destructive", onPress: resetInputHendler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHendler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHendler}> Reset </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHendler}>
              {" "}
              Confirm{" "}
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent300,
    borderBottomWidth: 2,
    color: Colors.accent300,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});
