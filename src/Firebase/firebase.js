import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyATVr2_Oz08yzVdfdL6158X2zekJXvfyZs",
    authDomain: "portfolio-70be9.firebaseapp.com",
    projectId: "portfolio-70be9",
    storageBucket: "portfolio-70be9.appspot.com",
    messagingSenderId: "66961284316",
    appId: "1:66961284316:web:36fbb41950c25c3e05e819",
    measurementId: "G-N8T23PH36R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }