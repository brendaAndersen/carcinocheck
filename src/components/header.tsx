import React from 'react';

type HeaderProps = {
    children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {

    return (<header className="lg:h-32 bg-blue-600 fixed top-0 left-0 flex items-center justify-between p-5 w-full dark:bg-gray-900 shadow-lg md:pl-64 z-10">
        {children}
    </header>
    )
}

// <header className="p-10 h-16 lg:h-30 bg-blue-600 fixed top-0 left-0 flex items-center justify-between w-full dark:bg-gray-900 shadow-lg md:pl-64 z-10">
{/* <div className="animate-slide-down text-sm text-slate-500 dark:text-slate-500 leading-relaxed max-w-lg sm:space-y-0 lg:space-y-4 text-justify dark:text-justify">
{children}
</div>
</header> */}