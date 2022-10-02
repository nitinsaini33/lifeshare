
import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCN9Jp0ZeujR9GNmAjYu4AuXHWFxE0XX08",
    authDomain: "food-hub-eaeb6.firebaseapp.com",
    databaseURL: "https://food-hub-eaeb6-default-rtdb.firebaseio.com",
    projectId: "food-hub-eaeb6",
    storageBucket: "food-hub-eaeb6.appspot.com",
    messagingSenderId: "887286637123",
    appId: "1:887286637123:web:73bdef44629ee0747f2af6"
  };
  const app = getApp.length > 0 ? getApp() :initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {app,db, storage};
  export default firebaseConfig;
  