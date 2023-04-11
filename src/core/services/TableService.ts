import { firestoreClient } from "./backend/firestore-client";
import { Table } from "../model/Table";

const COLLECTION = 'tables'

class TableService {

    async create(table: Omit<Table, 'id'>): Promise<Table> {
        return firestoreClient.addDocument(COLLECTION, table)
            .then(id => ({ id, ...table }))
    }

}

export const tableService = new TableService()