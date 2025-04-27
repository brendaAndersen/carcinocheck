'use client'
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ToggleLanguage } from '@/components/ToggleLanguage';
import { ThemeToggle } from '@/components/Toggle';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { api } from '@/services/api';
// import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";

type Password = {
    password: string,
    newPassword: string,
    email?: string
}
export default function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm<Password>();

    // const searchParams = useSearchParams();

    // useEffect(() => {
    //     setEmail(searchParams.get('email') || "");

    //     console.log('Email recebido:', email);
    // }, [email, searchParams]);


    const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        setIsLoading(true);
        const payload = {
            old_password: data["password"],
            password: data["newPassword"],
            email: data["email"] ? data["email"] : "teste@email.com",
        }
        try {
            console.log(await api.post("/forgot-password", payload));
        } catch (error) {
            alert('Estamos em desenvolvimento!')
            // alert('Ocorreu um erro. Por favor, tente novamente mais tarde.');
            console.log(error);

        } finally {
            setIsLoading(false);
        }
    }

    const [isLoading, setIsLoading] = useState(false);

    const params = useParams();
    const locale = params.locale as string;
    const t = useTranslations('Home');

    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <div className="min-h-screen bg-gray-200 dark:bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="bg-blue-600 fixed top-0 left-0 flex flex-col md:flex-row items-center justify-between p-5 w-full dark:bg-gray-900 shadow-lg z-50">
                    <div className="flex justify-between w-full md:w-auto">
                        <ToggleLanguage />
                    </div>
                    <div className="flex items-center ml-auto">
                        <ThemeToggle />
                    </div>
                </div>
                <Head>
                    <title>{t("recoverPassword")}</title>
                </Head>

                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-950 dark:text-slate-200">
                        {t("recoverPassword")}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        {t("descriptionRecover")}
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white dark:bg-slate-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative z-0 w-full mb-5 group gap-3 grid">
                                <input
                                    id="password"
                                    {...register("password", { required: 'Este campo é obrigatório' })}
                                    type="password"
                                    name="password"
                                    className="focus:outline-none block py-5 px- w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-slate-800 dark:text-gray-300 border-gray-300 dark:border-gray-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute top-1 left-[-7px] text-sm font-bold transform transition-all scale-75 
                                    peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-6 
                                    peer-focus:scale-85 peer-focus:-translate-y-1 duration-300 dark:text-gray-300"
                                >
                                    {t("password")}
                                </label>
                                {errors?.password && <p>{errors?.password?.message}</p>}
                            </div>
                            <div className="relative z-0 w-full mb-5 group gap-3 grid">
                                <input
                                    id="newPassword"
                                    {...register("newPassword", { required: 'Este campo é obrigatório' })}
                                    type="password"
                                    name="newPassword"
                                    className="outline-none block py-5 px- w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-slate-800 dark:text-gray-300 border-gray-300 dark:border-gray-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="newPassword"
                                    className="absolute top-1 left-[-9px] text-sm font-bold transform transition-all scale-75 
                                    peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-6 
                                    peer-focus:scale-85 peer-focus:-translate-y-1 duration-300 dark:text-gray-300"
                                >
                                    {t("newPassword")}
                                </label>
                                {errors.newPassword && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.newPassword.message}</p>
                                )}
                            </div>
                            {
                                // !email &&
                                <div className="relative z-0 w-full mb-5 group gap-3 grid">
                                    <input
                                        id="email"
                                        {...register("email", { required: 'Este campo é obrigatório' })}
                                        type="text"
                                        name="email"
                                        className="outline-none block py-5 px- w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-slate-800 dark:text-gray-300 border-gray-300 dark:border-gray-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute top-1 left-[-3px] text-sm font-bold transform transition-all scale-75 
                                        peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-6 
                                        peer-focus:scale-85 peer-focus:-translate-y-1 duration-300 dark:text-gray-300"
                                    >
                                        {t("email")}
                                    </label>
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors?.email.message}</p>
                                    )}
                                </div>
                            }
                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white
                                    bg-blue-500 hover:bg-blue-600 dark:text-white dark:hover:bg-slate-700 rounded-md p-2 dark:bg-slate-800 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isLoading ? t("sending") : t("recover")}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <Link href={`/${locale}/login`} className="text-sm font-sm text-blue-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-slate-300">
                                {t("return")}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}