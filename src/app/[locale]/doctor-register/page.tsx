/* eslint-disable @next/next/no-img-element */
'use client'
import { Header } from "@/components/header";
import Layout from "@/components/layout";
import Image from 'next/image'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { JSX, use, useEffect, useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { generateRandomId } from '@/utils/randomId';

interface State {
    id: {
        "ISO-ALPHA-2": string;
    };
    nome: string;
}

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
    medicalInstitution: string
}

export default function Login({ params }: { params: Promise<{ locale: string }> }) {
    const { register, handleSubmit, formState: { errors } } = useForm<Doctor>();
    const [states, setStates] = useState<State[]>([]);
    const { locale } = use(params);
    const [selectedCountry, setSelectedCountry] = useState(locale);
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        const newId = generateRandomId();
        setId(newId);
    }, []);

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        alert('Estamos em desenvolvimento!');
        console.log(data)
    }

    const fetchState = async () => {
        await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/paises').then(async (response) => {
            setStates(Object.values(response.data) as State[]);
        });
    }
    const t = useTranslations('Home');

    return (
        <Layout>
            <Header />
            <div className="bg-banner dark:bg-none bg-cover bg-center flex justify-center items-center text-center w-screen min-h-[calc(100vh-90px)]">
                <div className="animate-slide-down gap-5 flex items-center">
                    <div className="gap-5 sm:hidden lg:block hidden text-left items-start text-slate-600">
                        <div className="gap-5 grid p-5 lg:max-w-md max-w-sm">
                            <p className="text-lg">
                                {t('doctorRegisterFirstDesc')}
                            </p>
                            <span className="text-sm">
                                {t('doctorRegisterSecDesc')}
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
                    <div className="w-38 lg:w-[70rem] md:w-[40rem] gap-5 pt-10 max-w-[100%]">
                        <form
                            className="py-6 lg:grid lg:grid-cols-2 pt-6 md:pt-20 gap-x-5 bg-gray-100 dark:bg-gray-900 shadow-md rounded px-6 lg:max-w-4xl w-full"
                            onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <h1 className="text-2xl animate-slide-down text-gray-600 dark:text-slate-300">{t('dRegister')}</h1>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="firstName">
                                    {t('name')}
                                </label>

                                <input
                                    id="firstName"
                                    {...register("firstName", { required: 'Este campo é obrigatório' })}
                                    type="text"
                                    name="firstName"
                                    className="outline-none bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors?.firstName && <p className="text-red-500 text-xs italic">{errors?.firstName?.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="lastName">
                                    {t('lastName')}
                                </label>
                                <input
                                    id="lastName"
                                    {...register("lastName", { required: 'Este campo é obrigatório' })}
                                    type="text"
                                    name="lastName"
                                    className="outline-none bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors?.lastName && <p className="text-red-500 text-xs italic">{errors?.lastName?.message}</p>}
                            </div>
                            <div className="max-w-50 mb-4 overflow-hidden">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="lastName">
                                    {t('country')}
                                </label>
                                <select
                                    onChange={(e) => setSelectedCountry(e?.target?.value.toLowerCase())}
                                    onClick={() => fetchState()}
                                    name="country"
                                    id="country"
                                    className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {states.map<JSX.Element>((state: State, index: number) => (
                                        <option key={index} value={state?.id["ISO-ALPHA-2"]}>
                                            {state.nome}
                                        </option>
                                    ))}
                                </select>
                                {errors?.country && <p className="text-red-500 text-xs italic">{errors?.country?.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="email">
                                    {t('email')}
                                </label>
                                <input
                                    id="email"
                                    {...register("email", { required: 'Este campo é obrigatório' })}
                                    type="email"
                                    name="email"
                                    className="outline-none bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors?.email && <p className="text-red-500 text-xs italic">{errors?.email?.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="nationalIdentityDocument">
                                    {t('nationalId')}
                                </label>
                                <input
                                    id="nationalIdentityDocument"
                                    {...register("nationalIdentityDocument", { required: 'Este campo é obrigatório' })}
                                    type="text"
                                    name="nationalIdentityDocument"
                                    className="outline-none bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors?.nationalIdentityDocument && <p className="text-red-500 text-xs italic">{errors?.nationalIdentityDocument?.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="medicalRecordNumber">
                                    {t('medicalRecord')}
                                </label>
                                <input
                                    id="medicalRecordNumber"
                                    {...register("medicalRecordNumber", { required: 'Este campo é obrigatório' })}
                                    type="text"
                                    name="medicalRecordNumber"
                                    className="outline-none bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors?.medicalRecordNumber && <p className="text-red-500 text-xs italic">{errors?.medicalRecordNumber?.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="password">
                                    {t('password')}

                                </label>
                                <input
                                    id="password"
                                    {...register("password", { required: 'Este campo é obrigatório' })}
                                    type="password"
                                    name="password"
                                    className="outline-none bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors?.password && <p className="text-red-500 text-xs italic">{errors?.password?.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="confirmPassword">
                                    {t('confirmPassword')}
                                </label>
                                <input
                                    id="confirmPassword"
                                    {...register("confirmPassword", { required: 'Este campo é obrigatório' })}
                                    type="password"
                                    name="confirmPassword"
                                    className="outline-none bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors?.confirmPassword && <p className="text-red-500 text-xs italic">{errors?.confirmPassword?.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="address">
                                    {t('address')}

                                </label>
                                <input
                                    id="address"
                                    {...register("address", { required: 'Este campo é obrigatório' })}
                                    type="text"
                                    name="address"
                                    className="outline-none bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors?.address && <p className="text-red-500 text-xs italic">{errors?.address?.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="firstName">
                                    {t('medicalInstitution')}
                                </label>

                                <input
                                    id="medicalInstitution"
                                    {...register("medicalInstitution", { required: 'Este campo é obrigatório' })}
                                    type="text"
                                    name="medicalInstitution"
                                    className="outline-none bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors?.medicalInstitution && <p className="text-red-500 text-xs italic">{errors?.medicalInstitution?.message}</p>}
                            </div>
                            {id && <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="firstName">
                                    ID
                                </label>
                                <div
                                    className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                >{id}</div>
                            </div>}
                            <div className="flex h-12 items-center mt-6 border border-gray-300 rounded-lg overflow-hidden shadow-sm mb-8">

                                <span className="bg-transparent dark:bg-gray-800 flex items-center justify-center px-3 border-r border-gray-300">
                                    <img src={`https://flagcdn.com/16x12/${selectedCountry}.png`} alt="Brazil Flag" className="w-6 h-4" />
                                </span>

                                <input
                                    type="tel"
                                    placeholder="+(DDD) 99999-9999"
                                    className="bg-transparent dark:bg-gray-800 w-full p-2 outline-none shadow appearance-none border rounded py-2 px-2 dark:text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="flex items-center text-center justify-center col-span-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 dark:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    {t('register')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>)

}