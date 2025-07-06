/* eslint-disable @typescript-eslint/no-unused-vars */
import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function NewAppointment({params:{userId}}:SearchParamProps) {
  const patient = await getPatient(userId);
 
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
            <Link href='/'>
              <Image
                src='/assets/icons/logo-test1.svg'
                height={1000}
                width={1000}
                alt="patient"
                className="mb-12 h-10 w-fit"
              />
            </Link>

            <AppointmentForm
              type='create'
              userId={userId}
              patientId={patient.$id}
            />

              <p className="copyright mt-10 py-12">
                © 2025 Sa7tek
              </p>
        </div>
      </section>

      <Image
        src='/assets/images/img-2.jpg'
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}