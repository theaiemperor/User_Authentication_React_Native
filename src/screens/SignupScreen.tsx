import AuthContent from "../components/Auth/AuthContent";
import { Alert, ScrollView } from "react-native";
import { signInInterface } from "../constants/Types";
import { createUser } from "../Main/auth";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [authenticating, setAuthenticating] = useState(false);

  const signUp = async ({ email, password }: signInInterface) => {
    setAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      console.log(error);
      Alert.alert("Sign up failed", "Please check your credentials");
    }
    setAuthenticating(false);
  };

  return (
    <ScrollView>
      {authenticating ? (
        <LoadingOverlay message="Signing up...." />
      ) : (
        <AuthContent isLogin={false} onAuthenticate={signUp} />
      )}
    </ScrollView>
  );
}

export default SignupScreen;
