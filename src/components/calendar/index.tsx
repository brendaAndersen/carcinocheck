'use client'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { enUS } from 'date-fns/locale'

const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
    getDay,
    locales,
})

const events = [
    {
        title: 'Consulta',
        start: new Date(2025, 3, 10),
        end: new Date(2025, 3, 10),
    },
]

export default function CalendarWrapper() {
    return (
        <div className="h-96">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                className="dark:bg-neutral-700 rounded-lg p-4"
            />
        </div>
    )
}
