export default function ViewPacient() {
    return (
        <div className="flex items-center justify-center min-h-64">
            <div className="w-full max-w-6xl overflow-x-auto">
                <div className="inline-block min-w-full p-6 align-middle">
                    <div className="overflow-hidden border border-gray-200 rounded-lg dark:border-neutral-700">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 table-auto">
                            <thead className="bg-gray-50 dark:bg-neutral-800">
                                <tr>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-neutral-500">Patient</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-neutral-500">Type of Procedure</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-neutral-500">Primary Neoplasia</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-neutral-500">Birth Date</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-neutral-500">Procedure</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-neutral-500">Age</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {/* Row 1 */}
                                <tr className="bg-white dark:bg-neutral-900">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">Nome</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">Nome proc</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">Other</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">Data</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">Data/hora</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">Idade</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}