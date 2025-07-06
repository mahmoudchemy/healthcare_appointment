/* eslint-disable @typescript-eslint/no-unused-vars */
import RegisterForm from "@/components/forms/RegisterForm"
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image"
import Link from "next/link";


const Register = async ({params:{userId}}:SearchParamProps) => {
    const user = await getUser (userId);


  return (
    <div className="flex h-screen max-h-screen">
          <section className="remove-scrollbar container">
            <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
                <Link href='/'>
                  <Image
                    src='/assets/icons/logo-test1.svg'
                    height={1000}
                    width={1000}
                    alt="patient"
                    className="mb-12 h-10 w-fit"
                  />
                </Link>

                <RegisterForm
                    user={user}
                />
    
                  <p className="copyright mt-10 py-12 xl:text-left">
                    © 2025 Sa7tek
                  </p>
                
            </div>
          </section>
    
          <Image
            src='/assets/images/img-1.png'
            height={1000}
            width={1000}
            alt="patient"
            className="side-img max-w-[390px]"
          />
        </div>
  )
}

export default Register
