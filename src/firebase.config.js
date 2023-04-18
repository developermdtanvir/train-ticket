import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCo3UqyWShInxY9LxK_Xl4mvlgirq7siVs",
    authDomain: "volunteer-d5149.firebaseapp.com",
    projectId: "volunteer-d5149",
    storageBucket: "volunteer-d5149.appspot.com",
    messagingSenderId: "907084174706",
    appId: "1:907084174706:web:3fb2cf617c9cb23834f9eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);