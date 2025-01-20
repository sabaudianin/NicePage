import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

import { db } from "../firebase";

export const addDocument = async (collectionName, data) => {
  try {
    console.log("adding to collection & data:", collectionName, data);
    const colRef = collection(db, collectionName);
    const docRef = await addDoc(colRef, data);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document", error);
    throw error;
  }
};

export const CheckEmailInDb = async (collectionName, email) => {
  try {
    const colRef = collection(db, collectionName);
    //query to find field 'email'==email
    const q = query(colRef, where("email" == email));
    const snapshot = await getDocs(q);
    return !snapshot.empty;
    //if snapshot.empty==false => email exist
  } catch (error) {
    console.error("error checking Email", error);
    throw error;
  }
};
