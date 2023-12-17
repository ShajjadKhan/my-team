import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDOGMmG6fUVMNYbbvxWs_JKo8C_qpb1vBM",
  authDomain: "rks-team.firebaseapp.com",
  projectId: "rks-team",
  storageBucket: "rks-team.appspot.com",
  messagingSenderId: "785639669099",
  appId: "1:785639669099:web:86693595b0c6b0dfc9e02e",
  measurementId: "G-BE37SG18EG"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;