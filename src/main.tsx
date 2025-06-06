import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CustomerList from './pages/customer/CustomerList.tsx'
import CustomerForm from './pages/customer/CustomerForm.tsx'
import HomePage from './pages/home/HomePage.tsx'
import StockList from './pages/stock/StockList.tsx'
import StockForm from './pages/stock/StockForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<HomePage />} />
          <Route path='stocks' element={<StockList />} />
          <Route path='add-stock' element={<StockForm />} />
          <Route path='customers' element={<CustomerList />} />
          <Route path='add-customer' element={<CustomerForm />} />
        </Route  >
      </Routes>

    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
)
