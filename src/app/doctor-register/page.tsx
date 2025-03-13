/* eslint-disable @next/next/no-img-element */
'use client'
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/Toggle";
import Link from "next/link";
// import { LuPickaxe } from "react-icons/lu";
import Layout from "@/components/layout";
import Image from 'next/image'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

type Doctor = {
    carcinoCheckId: string;
    firstName: string;
    lastName: string;
    country: string;
    nationalIdentityDocument: string;
    address: string;
    phone: string;
    medicalRecordNumber: number;
    email: string;
    password: string;
    confirmPassword: string;

}

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm<Doctor>();

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        console.log(data);
        alert('Estamos em desenvolvimento!')
    }
    // const fetchCountries = () => {
    //     // https://servicodados.ibge.gov.br/api/v1/localidades/paises
    // }
    return (<Layout>
        <Header>
            <nav className="flex gap-5 w-full justify-center">
                <Link className="pt-2 hover:border-slate-300 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-slate-100 text-slate-300 dark:hover:text-slate-500" href="/">Home</Link>
                <Link className="pt-2 hover:border-slate-300 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-slate-100 text-slate-300 dark:hover:text-slate-500" href="/login">Doctor Login</Link>
                <Link className="pt-2 hover:border-slate-300 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-slate-100 text-slate-300 dark:hover:text-slate-500" href="/patient-login">Patient Login</Link>
                <Link className="text-white bg-blue-700 hover:bg-blue-500 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md p-2" href="/doctor-register">Doctor Register</Link>
            </nav>
            <div className="justify-self-end p-4 ml-auto">
                <ThemeToggle />
            </div>
        </Header>
        <div className="bg-banner dark:bg-none bg-cover bg-center flex justify-center items-center text-center w-screen min-h-[calc(100vh-90px)] gap-y-5">
            <div className="animate-slide-down gap-5 flex items-center">
                {/* <h1>Em desenvolvimento</h1>
                <LuPickaxe /> */}
                <div className=" sm:hidden lg:block hidden text-left items-start text-slate-600">
                    <div className="gap-5 grid p-5">
                        <p className="text-lg">
                            It is a pleasure to welcome you to our Carcinocheck doctor registration platform.
                        </p>
                        <span className="text-sm">
                            We believe that your expertise and dedication will be of great value to our community
                            and to patients who require specialized care.
                        </span>
                    </div>
                    <div className="gap-5 sm:hidden lg:block hidden">
                        <Image
                            src={'/logo-register-doctor.png'}
                            width={300}
                            height={300}
                            alt="Picture of the doctor"
                        />
                    </div>
                </div>
                <div className="w-full gap-5 pt-10">
                    <form
                        className="py-6 lg:grid lg:grid-cols-2 gap-2 bg-gray-100 dark:bg-gray-900 shadow-md rounded px-8 pt-24 pb-8 mb-4 lg:max-w-4xl w-full"
                        onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-2xl animate-slide-down text-gray-600 dark:text-slate-300">Doctor Register</h1>
                        {/* First Column */}
                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2 text-left" htmlFor="firstName">
                                First Name
                            </label>

                            <input
                                id="firstName"
                                {...register("firstName", { required: 'Este campo é obrigatório' })}
                                type="text"
                                name="firstName"
                                className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="First Name"
                            />
                            {errors?.firstName && <p className="text-red-500 text-xs italic">{errors?.firstName?.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2 text-left" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                {...register("lastName", { required: 'Este campo é obrigatório' })}
                                type="text"
                                name="lastName"
                                className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="Last Name"
                            />
                            {errors?.lastName && <p className="text-red-500 text-xs italic">{errors?.lastName?.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2 text-left" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                {...register("email", { required: 'Este campo é obrigatório' })}
                                type="email"
                                name="email"
                                className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="Email"
                            />
                            {errors?.email && <p className="text-red-500 text-xs italic">{errors?.email?.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2 text-left" htmlFor="nationalIdentityDocument">
                                National Identity Document
                            </label>
                            <input
                                id="nationalIdentityDocument"
                                {...register("nationalIdentityDocument", { required: 'Este campo é obrigatório' })}
                                type="text"
                                name="nationalIdentityDocument"
                                className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="National Identity Document"
                            />
                            {errors?.nationalIdentityDocument && <p className="text-red-500 text-xs italic">{errors?.nationalIdentityDocument?.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2 text-left" htmlFor="medicalRecordNumber">
                                Medical Record Number
                            </label>
                            <input
                                id="medicalRecordNumber"
                                {...register("medicalRecordNumber", { required: 'Este campo é obrigatório' })}
                                type="text"
                                name="medicalRecordNumber"
                                className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="Medical Record Number"
                            />
                            {errors?.medicalRecordNumber && <p className="text-red-500 text-xs italic">{errors?.medicalRecordNumber?.message}</p>}
                        </div>

                        {/* Second Column */}
                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2 text-left" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                {...register("password", { required: 'Este campo é obrigatório' })}
                                type="password"
                                name="password"
                                className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="Password"
                            />
                            {errors?.password && <p className="text-red-500 text-xs italic">{errors?.password?.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2 text-left" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                {...register("confirmPassword", { required: 'Este campo é obrigatório' })}
                                type="password"
                                name="confirmPassword"
                                className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="Confirm Password"
                            />
                            {errors?.confirmPassword && <p className="text-red-500 text-xs italic">{errors?.confirmPassword?.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2 text-left" htmlFor="address">
                                Address
                            </label>
                            <input
                                id="address"
                                {...register("address", { required: 'Este campo é obrigatório' })}
                                type="text"
                                name="address"
                                className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="Address"
                            />
                            {errors?.address && <p className="text-red-500 text-xs italic">{errors?.address?.message}</p>}
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm mb-8">

                            <span className="bg-transparent dark:bg-gray-800 flex items-center justify-center px-3 border-r border-gray-300">
                                <img src="https://flagcdn.com/w40/br.png" alt="Brazil Flag" className="w-6 h-4" />
                                {/* <Image
                                    width={30}
                                    height={30}
                                    src={"https://flagcdn.com/w40/br.png"} alt={""} /> */}
                            </span>

                            <input
                                type="tel"
                                placeholder="+55 99999-9999"
                                className="bg-transparent dark:bg-gray-800 w-full p-2 outline-none shadow appearance-none border rounded py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="flex items-center text-center justify-center col-span-2">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 dark:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>)

}