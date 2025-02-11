import { defineStore } from 'pinia';
import { auth } from '@/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
