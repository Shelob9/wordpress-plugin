import React, { FC, ReactChild } from 'react';

export type LayoutProps = {children:ReactChild};

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div>{children}</div>
    )
};

export  default  Layout;