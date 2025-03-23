import { useRef, InputHTMLAttributes } from "react";
// import { useForm } from "react-hook-form";
// import { z } from 'zod';

// const doctorSchema = z.object({
//     carcinoCheckId: z.string().min(6, 'Min. 6 characters'),
//     firstName: z.string().min(10),
//     lastName: z.string().min(10),
//     country: z.string().min(10),
//     nationalIdentityDocument: z.string().min(10),
//     address: z.string().min(10),
//     phone: z.string().min(10),
//     medicalRecordNumber: z.number().int().positive(),
//     email: z.string().min(10),
//     password: z.string().min(10),
//     confirmPassword: z.string().min(8),
//     medicalInstitution: z.string().min(10),
// })
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string,
    name: string,
    id: string,
    type?: string | number,
    ref: undefined,
    errors: string
}

export const InputText = ({ label }: InputProps) => {
    const inputRef = useRef(null);

    return (
        <div className="mb-4">

            <label className="block text-gray-500 text-sm font-bold mb-2 text-left" htmlFor="nationalIdentityDocument">
                {/* National Identity Document */}
                {label}
            </label>
            <input
                id="nationalIdentityDocument"
                // {...register("nationalIdentityDocument", { required: 'Este campo é obrigatório' })}
                ref={inputRef}
                type="text"
                name="nationalIdentityDocument"
                className="bg-transparent dark:bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>

    )
}
