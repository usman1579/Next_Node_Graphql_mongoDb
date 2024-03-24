import React, { ReactNode } from 'react';

interface CenteredLayoutProps {
    children: ReactNode;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
    return (
        <div className="flex justify-center items-center h-1/8 p-10">
            <div className="flex justify-between w-1/2">
                {children}
            </div>
        </div>
    );
};

export default CenteredLayout;