'use client'
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

export const ToggleLanguage = () => {
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: 'br', flag: 'br.png', alt: 'Português' },
        { code: 'us', flag: 'us.png', alt: 'English' },
        { code: 'fr', flag: 'fr.png', alt: 'Français' }
    ];

    const handleLanguageChange = (locale: string) => {
        if (!['br', 'us', 'fr'].includes(locale)) return;

        // 1. Remove todos os locales existentes do path
        const cleanPath = pathname.replace(/^\/(br|us|fr)/, '');

        // 2. Armazena a preferência
        sessionStorage.setItem('lan', locale);

        // 3. Navega para o novo path limpo
        router.push(`/${locale}${cleanPath}`);
    };

    return (
        <div className="flex items-center gap-2">
            {languages.map(({ code, flag, alt }) => (
                <button
                    key={code}
                    onClick={() => handleLanguageChange(code)}
                    title={alt}
                    aria-label={alt}
                    className="hover:scale-105 transition-transform duration-200"
                >
                    <Image
                        src={`https://flagcdn.com/24x18/${flag}`}
                        alt={alt}
                        width={24}
                        height={18}
                        className="w-6 h-auto border border-gray-200 rounded"
                    />
                </button>
            ))}
        </div>
    );
}