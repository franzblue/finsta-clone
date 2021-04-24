/* eslint-disable */

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAuHspol2HH89OZGCF0Hi-pOvIFGdANnTM",
    authDomain: "finsta-12321.firebaseapp.com",
    projectId: "finsta-12321",
    storageBucket: "finsta-12321.appspot.com",
    messagingSenderId: "517660890927",
    appId: "1:517660890927:web:edd6c755a77f1514ba33da"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);
// DO NOT RUN THIS CODE AGAIN!

export { firebase, FieldValue };
