import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD1_FXGQEFHg2sVMFnISdsVBz8e8ZHuSNY",
  authDomain: "taskapp-a5b37.firebaseapp.com",
  databaseURL: "https://taskapp-a5b37.firebaseio.com",
  projectId: "taskapp-a5b37",
  storageBucket: "taskapp-a5b37.appspot.com",
  messagingSenderId: "561860506152"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);