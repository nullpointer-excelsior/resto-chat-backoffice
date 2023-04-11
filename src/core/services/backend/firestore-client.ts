import { Firestore, addDoc, collection, setDoc, doc, getDoc, DocumentData, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "./firebase";

class FirestoreCLient {
    
    constructor(private db: Firestore) {}
    
    getDb() {
        return this.db
    }

    async addDocument<T extends { [x: string]: any; }>(collectionName: string, document: T) {
        return addDoc(collection(this.db, collectionName), document).then(docRef => docRef.id)
    }

    async setDocument<T extends { [x: string]: any; }>(collectionName: string, id: string, document: T) {
        const docRef = collection(this.db, collectionName);
        await setDoc(doc(docRef, id), document);
    }

    async getDocumentById(collectionName: string, docId: string): Promise<any> {
        const docRef = doc(this.db, collectionName, docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { 
                id: docSnap.id,
                ...docSnap.data()
            };
        }
        return null
    }

    async getDocuments(document: string): Promise<DocumentData> {
        const querySnapshot = await getDocs(collection(this.db, document));
        return querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    }

}

export const firestoreClient = new FirestoreCLient(getFirestore(firebaseApp))