import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}
export function logout() {
  signOut(auth);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export function addNewClothes(clothes, image, userId) {
  console.log(clothes);
  return set(ref(database, `closet/${userId}/${clothes.id}`), {
    ...clothes,
    image: image
      ? image
      : `../images/${clothes.sub ? clothes.sub + "_" : ""}${
          clothes.middle
        }.png`,
  });
}

export async function getClothes(userId) {
  let snapshot = await get(ref(database, `closet/${userId}`));

  if (snapshot && snapshot.exists()) {
    const items = snapshot.val() || {};

    return Object.values(items);
  }
  return [];
}

export function removeClothes(userId, clothes) {
  remove(ref(database, `closet/${userId}/${clothes.id}`));
}
