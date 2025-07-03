/* eslint-disable @typescript-eslint/no-unused-vars */
import * as sdk from 'node-appwrite';

export const {
    API_KEY,
    PROJECT_ID,
    DATABASE_ID,
    NEXT_PUBLIC_ENDPOINT:ENDPOINT,
    APPOINTMENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID:BUCKET_ID,
}= process.env;

const client = new sdk.Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('68669493000b018599e0')
    .setKey('standard_114aed88a0eea25d3648f8dc9ca713f3d40c84ac59feb1eb6230c96907d85966b78a881a8b5bdbe00116319d48774235b54ab09710bcd06ef5c047898a328dcb3f3d98428fe4eb2dc01680063f12aeace9b30be9a5c16e968ddae6c02ad18d4e992881b232bea214dbc86fa38f4ec7bd21349886351d98db877488bfad5fdd14');

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);


