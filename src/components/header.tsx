'use client'

import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from './Toggle';
import { ToggleLanguage } from './ToggleLanguage';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
// import DropdownCard from './dropdown';

type HeaderProps = {
    children: React.ReactNode;
};

export function HeaderAI({ children }: HeaderProps) {
    return (<header className="lg:h-32 md:gap-10 bg-blue-600 fixed top-0 left-0 flex items-center justify-between p-5 w-full dark:bg-gray-900 shadow-lg md:pl-64 z-10">
        {children}
    </header>
    )
}
export function Header() {
    const params = useParams();
    const t = useTranslations('Home');
    const locale = params.locale as string;

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <header className="bg-blue-600 fixed top-0 left-0 flex flex-col md:flex-row items-center justify-between p-5 w-full dark:bg-gray-900 shadow-lg z-50">
            <div className="flex justify-between w-full md:w-auto">
                <ToggleLanguage />
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none"
                    aria-label={isOpen ? t('closeMenu') : t('openMenu')}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            <nav className="hidden md:flex gap-5 w-full justify-center">
                <NavLink href={`/${locale}`} locale={locale} text={t('home')} />
                <NavLink href={`/${locale}/login`} locale={locale} text={t('dLogin')} />
                <NavLink href={`/${locale}/patient-login`} locale={locale} text={t('pLogin')} />
                <RegisterLink href={`/${locale}/doctor-register`} locale={locale} text={t('dRegister')} />
                <div className="lg:hidden md:hidden flex items-center ml-auto">
                    <ThemeToggle />
                </div>
            </nav>

            <div className="hidden md:block ml-auto">
                <ThemeToggle />
            </div>

            {isOpen && (
                <div className="md:hidden w-full bg-blue-700 dark:bg-gray-800 mt-4 rounded-lg shadow-xl">
                    <nav className="flex flex-col gap-3 p-4">
                        <MobileNavLink href={`/${locale}`} locale={locale} text={t('home')} toggle={toggleMenu} />
                        <MobileNavLink href={`/${locale}/login`} locale={locale} text={t('dLogin')} toggle={toggleMenu} />
                        <MobileNavLink href={`/${locale}/patient-login`} locale={locale} text={t('pLogin')} toggle={toggleMenu} />
                        <MobileRegisterLink href={`/${locale}/doctor-register`} locale={locale} text={t('dRegister')} toggle={toggleMenu} />
                        <div className="pt-4 flex justify-center">
                            <ThemeToggle />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export function AuthenticatedHeader() {
    const params = useParams();
    const t = useTranslations('Dashboard');
    const tHome = useTranslations('Home');
    const locale = params.locale as string;

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-blue-600 fixed flex flex-col 
        md:flex-row items-center justify-between p-5 w-full dark:bg-gray-900 shadow-lg z-50">
            <div className="flex justify-between w-full md:w-auto pl-5">
                <ToggleLanguage />
                {/* <div className='pl-5 w-36'>
                    <p className='text-slate-200 dark:bg-slate-800 bg-blue-800 p-1 rounded-md'>
                        {`ID: ${id}`}
                    </p>
                </div> */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none"
                    aria-label={isOpen ? tHome('closeMenu') : tHome('openMenu')}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* <div className='bg-green-400'>
                {id}
            </div> */}
            <nav className="hidden md:flex gap-5 w-full justify-center">
                {/* <DropdownCard title={t('pacients')} texts={[t('registerPacients'), t('viewPacients')]} />
                <DropdownCard title={t('opinions')} texts={[t('requestOpinion'), t('reportOpinion')]} /> */}

                <div className="relative group inline-block text-left">
                    <button className="btn m-1 text-slate-300">{t('pacients')}</button>
                    <ul className="absolute z-10 mt-2 w-52 origin-top-right rounded-md bg-blue-700 dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        <li>
                            <span className="block px-4 py-2 text-sm text-gray-900 ">
                                <NavLink href={`/${locale}/intranet/register-patient`} locale={locale} text={t('registerPacients')} />
                            </span>
                        </li>
                        <li>
                            <span className="block px-4 py-2 text-sm text-gray-900 ">
                                <NavLink href={`/${locale}/intranet/view-patient`} locale={locale} text={t('viewPacients')} />
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="relative group inline-block text-left">
                    <button className="btn m-1 text-slate-300">{t('opinions')}</button>
                    <ul className="absolute z-10 mt-2 w-52 origin-top-right rounded-md bg-blue-700 dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        <li>
                            <span className="block px-4 py-2 text-sm text-gray-700">
                                <NavLink href={`/${locale}/intranet/request`} locale={locale} text={t('requestOpinion')} />
                            </span>
                        </li>
                        <li>
                            <span className="block px-4 py-2 text-sm text-gray-700">
                                <NavLink href={`/${locale}/intranet/report`} locale={locale} text={t('reportOpinion')} />
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="lg:hidden md:hidden flex items-center ml-auto">
                    <ThemeToggle />
                </div>
            </nav>

            <div className="hidden md:block ml-auto">
                <ThemeToggle />
            </div>

            {isOpen && (
                <div className="md:hidden w-full bg-blue-700 dark:bg-gray-800 mt-4 rounded-lg shadow-xl">
                    <nav className="flex flex-col gap-3 p-4">
                        <MobileNavLink href={`/${locale}`} locale={locale} text={t('home')} toggle={toggleMenu} />
                        <MobileNavLink href={`/${locale}/login`} locale={locale} text={t('dLogin')} toggle={toggleMenu} />
                        <MobileNavLink href={`/${locale}/patient-login`} locale={locale} text={t('pLogin')} toggle={toggleMenu} />
                        <MobileRegisterLink href={`/${locale}/doctor-register`} locale={locale} text={t('dRegister')} toggle={toggleMenu} />
                        <div className="pt-4 flex justify-center">
                            <ThemeToggle />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
function NavLink({ href, locale, text }: { href: string; locale: string; text: string }) {
    return (
        <Link
            href={href}
            locale={locale}
            className="pt-2 hover:border-b-2 border-dotted hover:border-slate-300 dark:hover:border-gray-600 text-slate-300 dark:hover:text-slate-500"
        >
            {text}
        </Link>
    );
}

function RegisterLink({ href, locale, text }: { href: string; locale: string; text: string }) {
    return (
        <Link
            href={href}
            locale={locale}
            className="text-white bg-blue-700 hover:bg-blue-500 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md p-2"
        >
            {text}
        </Link>
    );
}

function MobileNavLink({ href, locale, text, toggle }: { href: string; locale: string; text: string; toggle: () => void }) {
    return (
        <Link
            href={href}
            locale={locale}
            onClick={toggle}
            className="block py-3 px-4 text-white hover:bg-blue-600 dark:hover:bg-gray-700 rounded-md transition"
        >
            {text}
        </Link>
    );
}

function MobileRegisterLink({ href, locale, text, toggle }: { href: string; locale: string; text: string; toggle: () => void }) {
    return (
        <Link
            href={href}
            locale={locale}
            onClick={toggle}
            className="block py-3 px-4 text-center text-white bg-blue-800 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition mt-2"
        >
            {text}
        </Link>
    );
}
