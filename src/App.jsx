import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegistrationPage from './pages/LoginRegistrationPage';
import Home from './pages/Home';
import PrivateRoute from './components/common/PrivateRoute';
import AddExpenseForm from './pages/AddExpenseForm';
import "./App.css"
import AllExpenses from './pages/AllExpenses';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import LoginProtectedRoute from './pages/LoginProtectedRoute';
import Income from './pages/Income';

function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} >
      <Route index element={<Dashboard/>}></Route>
      <Route path='add-expense' element={<AddExpenseForm/>}></Route>
      <Route path='all-expenses' element={<AllExpenses />}></Route>
      <Route path='income' element={<Income/>}></Route>
    </Route>
    <Route path='*' element={<NotFound/>}></Route>
    <Route path="/login-registration" element={<LoginProtectedRoute><LoginRegistrationPage/></LoginProtectedRoute>}/>

  </Routes>
</Router>
  )
}

export default App
