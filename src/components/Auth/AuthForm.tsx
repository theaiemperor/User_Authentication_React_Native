import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  credentialsInterface,
  invalidCredentials,
} from "../../constants/Types";
import Button from "../ui/Button";
import Input from "./Input";

function AuthForm({
  isLogin,
  onSubmit,
  credentialsInvalid,
}: {
  isLogin: boolean;
  onSubmit: (credentials: credentialsInterface) => void;
  credentialsInvalid: invalidCredentials;
}) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType: string, enteredValue: string) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View>
      <View>
        <Input
          label="Email Address"
          onUpdateValue={(enteredValue) =>
            updateInputValueHandler("email", enteredValue)
          }
          value={enteredEmail}
          keyboardType="email-address"
          secure={false}
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            onUpdateValue={(enteredValue) =>
              updateInputValueHandler("confirmEmail", enteredValue)
            }
            value={enteredConfirmEmail}
            keyboardType="email-address"
            secure={false}
            isInvalid={emailsDontMatch}
          />
        )}
        <Input
          label="Password"
          onUpdateValue={(enteredValue) =>
            updateInputValueHandler("password", enteredValue)
          }
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
          keyboardType="default"
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={(enteredValue) =>
              updateInputValueHandler("confirmPassword", enteredValue)
            }
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
            keyboardType="default"
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
