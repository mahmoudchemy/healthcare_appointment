/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { ID, Query } from "node-appwrite"
import { databases, storage, users } from "../appwrite.config"
import { parseStringify } from "../utils";

import {InputFile} from 'node-appwrite/file'

/* eslint-disable @typescript-eslint/no-unused-vars */
export const createUser = async (user:CreateUserParams) => {
    try {

        const newUser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name
        )

        console.log({newUser});
        
    } catch (error:any) {
        if(error && error?.code === 409){
            const documents = await users.list([
                Query.equal('email',[user.email])
            ])

            return documents?.users[0]
        }
    }
}

export const getUser = async (userId:string) => {
    try {
        const user = await users.get(userId);

        return parseStringify(user);
    } catch (error) {
        console.log(error);
    }
}

export const registerPatient = async ({ identificationDocument, ...patient}:RegisterUserParams) => {
    try {
        let file;

        if(identificationDocument) {
            const inputFile = InputFile.fromBuffer(
                identificationDocument?.get('blobFile') as Blob,
                identificationDocument?.get('fileName') as string,
            )

            file = await storage.createFile('6866959a001bb6a6a8c1', ID.unique(), inputFile)
        }

        const newPatient = await databases.createDocument(
            '6866950d002347c76191',
            '686695430011725b4a4f',
            ID.unique(),
            {
                identificationDocumentId: file?.$id || null,
                identificationDocumentUrl: `${'https://cloud.appwrite.io/v1'}/storage/buckets/${'6866959a001bb6a6a8c1'}/files/${file?.$id}/view?project=${'68669493000b018599e0'}`,
                ...patient,
            }
        )

        return parseStringify(newPatient);
        
    } catch (error) {
        console.log(error);
    }
}

export const getPatient = async (userId:string) => {
    try {
        const patients = await databases.listDocuments(
            '6866950d002347c76191',
            '686695430011725b4a4f',
            [Query.equal('userId',userId)]
        );

        return parseStringify(patients.documents[0]);
    } catch (error) {
        console.log(error);
    }
}





