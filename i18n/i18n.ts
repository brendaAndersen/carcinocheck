import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['us', 'br', 'fr'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
    // Verificamos se o locale existe na lista de locales válidos
    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    // Neste ponto sabemos que locale é válido e está na lista
    const safeLocale = locale as Locale;

    return {
        messages: (await import(`../messages/${safeLocale}.json`)).default,
        timeZone: 'America/Sao_Paulo',
        locale: safeLocale // Usamos o locale tipado corretamente
    };
});