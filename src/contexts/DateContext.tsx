import React, { createContext, useContext, useState } from 'react';
import { format } from 'date-fns';

interface DateContextType {
    selectedDate: string;
    setSelectedDate: (date: string) => void;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export function DateProvider({ children }: { children: React.ReactNode }) {
    const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));

    return (
        <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
            {children}
        </DateContext.Provider>
    );
}

export function useDate() {
    const context = useContext(DateContext);
    if (context === undefined) {
        throw new Error('useDate must be used within a DateProvider');
    }
    return context;
} 