'use client'
import { Header } from "@/components/header";
import Layout from "@/components/layout";
import { useTranslations } from "next-intl";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from "../../../../i18n/navigation";

type Doctor = {
    idCarcinocheck: string;
    password: string;
}
export default function Login({ }: { params: Promise<{ locale: string }> }) {
    const { register, handleSubmit, formState: { errors } } = useForm<Doctor>();

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        console.log(data);
        alert('Estamos em desenvolvimento!')
    }
    const t = useTranslations('Home');

    return (
        <Layout>
            <Header />
            <div
                className={`bg-banner dark:bg-none bg-cover bg-center flex justify-center items-center 
                    text-center w-screen min-h-[calc(100vh-90px)] text-slate-700`}
            >
                <form className="flex w-96 p-10 flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-2xl animate-slide-down dark:text-gray-300">{t('dLogin')}</h1>
                    <p className="animate-slide-down text-xs text-slate-500">
                        {t('lDescription')}
                        <span className="block">
                            {t('lSecondDescription')}
                        </span>
                    </p>
                    <div className="relative z-0 w-full mb-5 group ">
                        <input
                            id="idCarcinocheck"
                            {...register("idCarcinocheck", { required: 'Este campo é obrigatório' })}
                            type="text"
                            name="idCarcinocheck"
                            className="outline-none dark:text-gray-300 text-slate-800 block py-4 px- w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-300 dark:border-gray-600 peer "
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="idCarcinocheck"
                            className="absolute top-1 left-[-10px] text-sm font-bold transform transition-all scale-75 
                            peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-6 
                            peer-focus:scale-85 peer-focus:-translate-y-4 duration-300 dark:text-gray-300"
                        >
                            ID Carcinocheck
                        </label>
                        {errors?.idCarcinocheck && <p className="text-red-500">{errors?.idCarcinocheck?.message}</p>}
                    </div>

                    <div className="relative z-0 w-full mb-5 group gap-3 grid">
                        <input
                            id="password"
                            {...register("password", { required: 'Este campo é obrigatório' })}
                            type="password"
                            name="password"
                            className="outline-none block py-5 px- w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-slate-800 dark:text-gray-300 border-gray-300 dark:border-gray-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute top-1 left-[-10px] text-sm font-bold transform transition-all scale-75 
                            peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-6 
                            peer-focus:scale-85 peer-focus:-translate-y-4 duration-300 dark:text-gray-300"
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
                    <button className="bg-blue-600 hover:bg-blue-400 text-white dark:hover:bg-slate-600 rounded-md p-2 dark:bg-slate-700" type="submit">{t('signIn')}</button>
                </form>
            </div>
        </Layout>)
}