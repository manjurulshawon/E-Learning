import {firebaseConfig} from './firebaseConfig'
import { initializeApp } from "firebase/app";

export const initializedApp = initializeApp(firebaseConfig);