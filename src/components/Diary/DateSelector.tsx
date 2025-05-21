import React from 'react';
import { format, parseISO, addDays, subDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { useDate } from '../../context/DateContext';

const DateSelector: React.FC = () => {
    const { selectedDate, setSelectedDate } = useDate();
    const isoDate = parseISO(selectedDate);

    const goPrev = () => {
        const prev = subDays(isoDate, 1);
        setSelectedDate(format(prev, 'yyyy-MM-dd'));
    };

    const goNext = () => {
        const next = addDays(isoDate, 1);
        setSelectedDate(format(next, 'yyyy-MM-dd'));
    };

    return (
        <div className="flex items-center justify-center mt-4 mb-6 space-x-4">
            <button onClick={goPrev} aria-label="Jour précédent">
                <IoChevronBackOutline size={24} className="text-gray-500 cursor-pointer"/>
            </button>
            <DatePicker
                selected={isoDate}
                onChange={(date: Date | null) => {
                    if (date) {
                        setSelectedDate(format(date, 'yyyy-MM-dd'));
                    }
                }}
                dateFormat="dd.MM.yy"
                className="cursor-pointer text-center bg-white text-[#4D9078] border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
                calendarClassName="bg-white text-[#4D9078] rounded shadow-lg"
                popperClassName="z-50"
                showPopperArrow={false}
            />
            <button onClick={goNext} aria-label="Jour suivant">
                <IoChevronForwardOutline size={24} className="text-gray-500 cursor-pointer"/>
            </button>
        </div>
    );
};

export default DateSelector; 