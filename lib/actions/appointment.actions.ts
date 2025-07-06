/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { ID } from "node-appwrite";
import { databases } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createAppointment = async (appointment:CreateAppointmentParams) => {
try {
    const newAppointment = await databases.createDocument(
            '6866950d002347c76191',
            '68669583002153514fb7',
            ID.unique(),
            appointment
        )

        return parseStringify(newAppointment);
} catch (error) {
    console.log(error);
    }
}

export const getAppointment = async (appointmentId:string) => {
    try {
        const appointment = await databases.getDocument(
            '6866950d002347c76191',
            '68669583002153514fb7',
            appointmentId,
        )

        return parseStringify(appointment);
        
    } catch (error) {
        console.log(error);
    }
}

