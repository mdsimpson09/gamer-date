//(auth)/layout
import React, { FC, ReactNode } from 'react'



interface LayoutProps { 
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div >
     {children}
    </div>
    
  )
}

export default Layout
