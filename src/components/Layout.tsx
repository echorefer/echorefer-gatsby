import React from 'react';
import { Paper } from '@mui/material';

import Header from './Header/Header';
import Main from './Main';
import Footer from './Footer/Footer';

import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Paper style={{ minHeight: '100vh', backgroundColor: '#f8f8f8' }}>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Paper>
);

export default Layout;
