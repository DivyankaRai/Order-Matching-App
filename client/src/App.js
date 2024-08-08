import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { OrderProvider } from './context/OrderContext';
import OrderFormPage from './pages/OrderFormPage';
import DashboardPage from './pages/DashboardPage';
import SimpleNavbar from './components/Navbar';

const App = () => {
    return (
        <ChakraProvider>
            <Router>
                 <SimpleNavbar/>
                <OrderProvider>
                    <Routes>
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/" element={<OrderFormPage />} />
                    </Routes>
                 </OrderProvider>
            </Router>
        </ChakraProvider>
    );
};

export default App;
