import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NotFound from './pages/404';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </>
  )
);

const App = () => {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App