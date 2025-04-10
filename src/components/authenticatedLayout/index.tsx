import { Footer } from "../Footer";
import { ReactNode } from "react";
import { AuthenticatedHeader } from "../header";

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {

    return (
        <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-[#020817]">
            <AuthenticatedHeader />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
