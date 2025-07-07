/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { ID, Query } from "node-appwrite";
import { databases } from "../appwrite.config";
import { parseStringify } from "../utils";
import { Appointment } from "@/types/appwrite.types";

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

export const getRecentAppointmentsList = async () => {
    try {
        const appointments = await databases.listDocuments(
            '6866950d002347c76191',
            '68669583002153514fb7',
            [Query.orderDesc('$createdAt')]
        );

        const initialCounts = {
            scheduledCount:0,
            pendingCount:0,
            cancelledCount:0,
        }

        const counts = (appointments.documents as Appointment[]).reduce((acc, appointment) => {
            if(appointment.status === 'scheduled') {
                acc.scheduledCount += 1;
            }else if (appointment.status === 'pending'){
                acc.pendingCount += 1;
            }else if (appointment.status === 'cancelled'){
                acc.cancelledCount +=1;
            }

            return acc;

        }, initialCounts);
    
    } catch (error) {
        console.log(error);
    }
}