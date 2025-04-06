import { useTranslations } from 'next-intl';

export const Footer = () => {
    const t = useTranslations('Home');
    return (
        <footer className="dark:bg-gray-900 text-white bg-blue-600 text-center p-4 justify-items-end z-0">
            <p>
                Tecnopuc Porto Alegre - Av. Ipiranga, 6681, Porto Alegre, Rio Grande do Sul, Brasil. CEP: 90619-900
            </p>
            <p>
                2022 - {new Date().getFullYear()} {t('rights')}.
            </p>
        </footer>
    )
}