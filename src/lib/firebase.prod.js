import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

//seed database

//config
const config = {
  apiKey: 'AIzaSyD6_3_nRvIJHoOhL1XqLq4HJZWQE_UrYWk',
  authDomain: 'netflix-clone-b26c0.firebaseapp.com',
  projectId: 'netflix-clone-b26c0',
  storageBucket: 'netflix-clone-b26c0.appspot.com',
  messagingSenderId: '587418999945',
  appId: '1:587418999945:web:3eb4ce0bc8e084b8cf3a58',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
