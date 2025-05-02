import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

async function createUser(email: string, password: string) {
  const URL =
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=` + API_KEY;
  await axios.post(URL, {
    email,
    password,
    returnSecureToken: true,
  });
}

async function loginUser(email: string, password: string) {
  const URL =
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=` +
    API_KEY;
  await axios.post(URL, {
    email,
    password,
    returnSecureToken: true,
  });
}

export { createUser, loginUser };
