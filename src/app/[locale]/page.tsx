'use client'
import { Header } from "@/components/header";
import Layout from "@/components/layout";
import { FaRobot } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";
import { use } from "react";

export type PageParams = {
    params: {
        locale: string;
    };
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
    const router = useRouter();
    const t = useTranslations('Home');
    const { locale } = use(params);

    return (
        <Layout>
            <Header />
            {/* <ToggleLanguage />
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
            <div
                className={`relative bg-banner dark:bg-none bg-cover bg-center h-[600px]
                flex items-center w-screen 
                lg:min-h-[calc(100vh-100px)]
                justify-start dark:justify-center
                text-left dark:text-center sm:p-10 lg:p-0 lg:pl-20 dark:pl-0`}
            >
                <div className="pt-16 lg:pt-10 max-w-3xl ">
                    <h4 className="pt-5 animate-slide-down">
                        <span className="animate-slide-down text-sm dark:text-slate-500 text-slate-600">
                            {t('first')}
                        </span>
                    </h4>
                    <h1 className="text-5xl font-bold leading-tight ">
                        <span className="pt-2 animate-slide-down block">{t('title')}</span>
                        <span className="animate-slide-down block">{t('titleS')}</span>
                        <span className="animate-slide-down block">{t('titleT')}</span>
                    </h1>

                    <div className="sm:flex sm:items-center lg:grid animate-slide-down text-sm text-slate-500 dark:text-slate-500 leading-relaxed max-w-lg space-y-4 text-justify lg:dark:text-justify">
                        <p className="p-2 grid grid-col sm:flex-row sm:gap-5">
                            <span>{t('third')}</span>
                            <span>{t('four')}</span>
                        </p>
                    </div>
                </div>
                <div className="fixed h-60 lg:h-40 md:h-36 w-full bottom-1 left-2 flex justify-end p-4">
                    <div className="rounded-3xl border-2 border-slate-300 w-10 h-10 hover:scale-125 hover:cursor-pointer flex items-center justify-center">
                        <FaRobot className="w-7 h-7" onClick={() => router.push(`${locale}/ai`)} />
                    </div>
                </div>
            </div >


        </Layout >
    )
}