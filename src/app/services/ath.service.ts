import { Injectable } from '@angular/core';
import {  Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, getFirestore, setDoc } from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { CredentialsModel } from '../models/credentials.models';
import { UserModel } from '../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class AthService {


  constructor( 
    private auth: Auth,
    public db   : Firestore,
    ) { 
  }

  login( email: string, password: string ){

    return  signInWithEmailAndPassword( this.auth, email, password)
  };

  register({ email, password }: CredentialsModel){

   return createUserWithEmailAndPassword ( this.auth, email, password );
  };

  setUser( user:UserModel) {
    
    const newUser = doc( getFirestore(), 'users', user.id );
    setDoc( newUser, {...user}, { merge: true } )
  };

  logout(){

    this.auth.signOut();
  };

  async  getUserData(id: string): Promise<DocumentData>{
    const docSnap = await getDoc(doc(getFirestore(), "users", id));
    return docSnap.exists() ? docSnap.data() : null!
  };
};
