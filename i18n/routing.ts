export const locales = ['us', 'br', 'fr'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'us';

export const routing = {
    locales,
    defaultLocale
};