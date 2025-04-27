'use client'
import { Header } from "@/components/header";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Layout from "@/components/layout";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";

type Patient = {
    patientNumber: string;
    password: string;
}
export default function PatientLogin({ }: { params: Promise<{ locale: string }> }) {
    const { register, handleSubmit, formState: { errors } } = useForm<Patient>();

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        console.log(data);
        alert('Estamos em desenvolvimento!')
    }
    const t = useTranslations('Home');

    return (
        <Layout>
            <Header />

            {/* <Header>
                <ToggleLanguage />
                <nav className="flex gap-5 w-full justify-center">
                    <Link className="pt-2 hover:border-slate-300 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-slate-100 text-slate-300 dark:hover:text-slate-500" href={`/${locale}`}>{t('home')}</Link>
                    <Link className="pt-2 hover:border-slate-300 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-slate-100 text-slate-300 dark:hover:text-slate-500" href={`/${locale}/login`}>{t('dLogin')}</Link>
                    <Link className="pt-2 hover:border-slate-300 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-slate-100 text-slate-300 dark:hover:text-slate-500" href={`/${locale}/patient-login`}>{t('pLogin')}</Link>
                    <Link className="text-white bg-blue-700 hover:bg-blue-500 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md p-2" href={`/${locale}/doctor-register`}>{t('dRegister')}</Link>
                    <div className="justify-self-end sm:flex items-center lg:flex-none lg:p-4 ml-auto lg:hidden visible ">
                        <ThemeToggle />
                    </div>
                </nav>
                <div className="justify-self-end sm:p-0 lg:p-4 ml-auto invisible lg:visible ">
                    <ThemeToggle />
                </div>
            </Header> */}
            <div className="bg-banner dark:bg-none bg-cover bg-center flex justify-center items-center 
                    text-center w-screen min-h-[calc(100vh-90px)] gap-5">
                <form className="flex w-96 p-10 flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-2xl animate-slide-down">{t('pLogin')}</h1>
                    <p className="text-xs text-slate-500 animate-slide-down">
                        {t('pLoginDesc')}
                        <span className="block">
                            {t('pLoginSecondDesc')}
                        </span>
                    </p>
                    <div className="relative z-0 w-full mb-5 group text-white">
                        <input
                            id="patientNumber"
                            {...register("patientNumber", { required: 'Este campo é obrigatório' })}
                            type="text"
                            name="patientNumber"
                            className="outline-none text-black border-gray-300 dark:border-gray-800 dark:text-white block py-4 px- w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:border-violet-250 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="patientNumber"
                            className="absolute top-1 left-[-10px] text-sm font-bold transform transition-all scale-75 
                            peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-6 
                            peer-focus:scale-85 peer-focus:-translate-y-4 duration-300 text-slate-800 dark:text-gray-300"
                        >
                            Patient Number
                        </label>
                        {errors?.patientNumber && <p>{errors?.patientNumber?.message}</p>}
                    </div>

                    <div className="relative z-0 w-full mb-5 group text-white gap-3 grid">
                        <input
                            id="password"
                            {...register("password", { required: 'Este campo é obrigatório' })}
                            type="password"
                            name="password"
                            className="outline-none dark:text-white text-slate-800 block py-5 px- w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-300 dark:border-gray-800 focus:border-violet-250 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute top-1 left-[-10px] text-sm font-bold transform transition-all scale-75 
                            peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-6 
                            peer-focus:scale-85 peer-focus:-translate-y-4 duration-300 text-black dark:text-gray-300"
                        >
                            Password
                        </label>
                        {errors?.password && <p>{errors?.password?.message}</p>}

                        <Link href={`/forgot-password`}>
                            <span className="text-sm cursor-pointer dark:hover:text-slate-300 hover:text-blue-500 text-slate-500">
                                {t('forgotPassword')}
                            </span>
                        </Link>
                    </div>

                    <button className="bg-blue-700 hover:bg-blue-500 text-white dark:hover:bg-slate-600 rounded-md p-2 dark:bg-slate-700" type="submit">{t('signIn')}</button>
                </form>
            </div>
        </Layout>)

}