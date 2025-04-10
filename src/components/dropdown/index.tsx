import Link from "next/link";
import { useState } from "react";

type DropdownProp = {
    texts: string[];
    title: string;
}
export default function DropdownCard({ title, texts }: DropdownProp) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="btn m-1 px-4 py-2 bg-gray-800 rounded-md shadow hover:bg-gray-700"
            >
                {title}
            </button>

            {open && (
                <div className="absolute z-10 mt-2 w-64 bg-slate-800 rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="p-4">
                        <p className="text-sm text-gray-400">
                            {texts.map((text, index) => (
                                <span key={index} className="block px-4 py-2 text-sm text-gray-900 ">
                                    <Link
                                        href={`/us/intranet/register-patient`}
                                        className="pt-2 hover:border-b-2 border-dotted hover:border-slate-300 dark:hover:border-gray-600 text-slate-300 dark:hover:text-slate-500"
                                    >
                                        {text}
                                    </Link>
                                </span>
                            ))}

                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
