import { useState } from 'react'
import './App.css';
import ListEmployeeComponents from './Components/ListEmployeeComponents'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeComponent from './Components/EmployeeComponent';
import ListDepartmentComponent from './Components/ListDepartmentComponent';
import DepatmentComponent from './Components/DepatmentComponent';

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponents />} ></Route>
          <Route path='/employees' element={<ListEmployeeComponents />} />
          <Route path='/add-employee' element={<EmployeeComponent />} />
          <Route path='/edit-employee/:id' element={ <EmployeeComponent />} />
          <Route path='/departments' element={ <ListDepartmentComponent />} />
          <Route path='/add-department' element={<DepatmentComponent />} />
          <Route path='/edit-department/:id' element={<DepatmentComponent />} />
        </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
