// src/types/global.d.ts
declare module '*.json' {
    const value: import('next-intl').AbstractIntlMessages;
    export default value;
}