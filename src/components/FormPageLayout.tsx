// src/components/FormPageLayout.tsx
import React from 'react';

interface FormPageLayoutProps {
    children: React.ReactNode;
}

const FormPageLayout: React.FC<FormPageLayoutProps> = ({ children }) => {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
};

export default FormPageLayout;
