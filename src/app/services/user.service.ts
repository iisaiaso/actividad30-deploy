import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: Firestore) { }

  addUser(user: User) {
    const refUSer = collection(this.fireStore, 'users')
    return addDoc(refUSer, user)
  }

  getUser(): Observable<User[]> {
    const refUSer = collection(this.fireStore, 'users')
    return collectionData(refUSer, { idField: 'id' }) as Observable<User[]>
  }
}
