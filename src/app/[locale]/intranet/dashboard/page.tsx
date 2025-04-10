
import CalendarComponent from '@/components/calendar';
import AuthenticatedLayout from '../../../../components/authenticatedLayout';
import { generateRandomId } from '@/utils/randomId';

export default function Dashboard() {
    const id = generateRandomId();
    console.log(id)
    return (
        <AuthenticatedLayout>
            <div className="flex flex-col lg:flex-row lg:grid sm:flex items-center justify-center lg:h-80 gap-16">
                <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center min-h-80 gap-5'>
                    <div className='hidden flex-col lg:grid grid-cols-3 bg-slate-200 dark:bg-neutral-900 p-8 rounded-lg h-36 items-center justify-center gap-5'>
                        <div className='w-20 md:w-32 lg:w-full flex'>
                            <span className="cursor-pointer text-white dark:text-slate-300 p-5 rounded-md bg-green-600 hover:bg-green-500 ">
                                New Patient
                            </span>
                        </div>
                        <div className='w-20 md:w-32 lg:w-full flex'>
                            <span className="cursor-pointer text-white dark:text-slate-300 p-5 rounded-md bg-violet-600 hover:bg-violet-500 ">
                                View Patients
                            </span>
                        </div>

                        <div className='w-20 md:w-32 lg:w-full flex'>
                            <span className="cursor-pointer text-white dark:text-slate-300 p-5 rounded-md bg-blue-600 hover:bg-blue-500 ">
                                Second Opinion
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center  rounded-lg h-40 lg:h-36">
                        <div className='grid items-center md:w-80 lg:w-full justify-center dark:bg-neutral-900 rounded-lg lg:h-36 bg-slate-200'>
                            <span className="cursor-pointer p-5 rounded-md ">
                                Procedures Today
                            </span>
                            <span className='flex items-center justify-center p-2'>
                                0
                            </span>
                        </div>
                        <div className='grid items-center md:w-80 lg:w-full justify-center dark:bg-neutral-900 rounded-lg lg:h-36 bg-slate-200'>
                            <span className="cursor-pointer p-5 rounded-md ">
                                Procedures Tomorrow
                            </span>
                            <span className='flex items-center justify-center p-2'>
                                0
                            </span>
                        </div>
                        <div className='grid items-center md:w-80 lg:w-full justify-center dark:bg-neutral-900 rounded-lg lg:h-36 bg-slate-200'>
                            <span className="cursor-pointer p-5 rounded-md ">
                                Procedures Week
                            </span>
                            <span className='flex items-center justify-center p-2'>
                                0
                            </span>
                        </div>
                        <div className='grid items-center md:w-80 lg:w-full justify-center dark:bg-neutral-900 rounded-lg lg:h-36 bg-slate-200'>
                            <span className="cursor-pointer p-5 rounded-md ">
                                Total Patients Registered
                            </span>
                            <span className='flex items-center justify-center p-2'>
                                2
                            </span>
                        </div>
                    </div>
                </div>
                <div className='lg:items-start justify-center items-center lg:justify-start lg:grid gap-5 flex-col flex grid-cols-2'>
                    <div className="bg-slate-100 rounded-xl shadow p-4 dark:bg-neutral-800 w-full md:w-full lg-w-full">
                        <p className='text-center text-lg'>Patient Procedures</p>
                        <CalendarComponent />
                    </div>
                    <div className="flex items-center justify-center min-h-10">
                        <div className="w-full max-w-6xl overflow-x-auto">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden border border-gray-200 rounded-lg dark:border-neutral-700">
                                    <table className="md:w-[41rem] w-full lg:min-w-full divide-y divide-gray-200 dark:divide-neutral-700 table-auto">
                                        <thead className="bg-slate-100 dark:bg-neutral-800">
                                            <tr>
                                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-neutral-500">Patient Name</th>
                                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-neutral-500">View Info</th>
                                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-neutral-500">Add New Procedure</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <tr className="bg-slate-50 dark:bg-neutral-900 text-center">
                                                <td className="px-6 py-4 text-center text-sm font-medium text-gray-800 dark:text-neutral-200">Neiva Teresinha</td>
                                                <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                                                    <button className="text-sm font-semibold  bg-blue-800 hover:bg-blue-700 p-2 rounded-md dark:text-blue-500 dark:hover:text-blue-400">
                                                        <span className='text-center text-slate-200'>
                                                            View
                                                        </span>
                                                    </button>

                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                                                    <button className="text-sm font-semibold hover:bg-green-700 bg-green-800 p-2 rounded-md dark:text-blue-500 dark:hover:text-blue-400">
                                                        <span className='text-slate-200'>
                                                            Add
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
