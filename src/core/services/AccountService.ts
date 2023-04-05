import { firestoreClient } from "./backend/firestore-client";

const COLLECTION = 'accounts'

class AccountService {

    async findByEmail(email: string) {
        return await firestoreClient.getDocumentById(COLLECTION, email)
    }

    async createAccount(newAccount: { email: string, plan: string; }) {
        return await firestoreClient.setDocument(COLLECTION, newAccount.email, {
            email: newAccount.email,
            plan: newAccount.plan
        })
    }

}

export const accountService = new AccountService()
