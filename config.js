
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3B7xViDOUSA2D_AKwfN_SUrzumT1Cz8Q',
  authDomain: 'abood-bt-chart.firebaseapp.com',
  projectId: 'abood-bt-chart',
  storageBucket: 'abood-bt-chart.appspot.com',
  messagingSenderId: '617043465713',
  appId: '1:617043465713:web:95d4253b85f4d8a1c9e050',
  measurementId: 'G-5C1D77MVGQ'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
