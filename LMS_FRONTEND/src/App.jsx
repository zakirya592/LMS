import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import HomePage from './Pages/Userpage/HomePage/HomePage';
import {  QueryClient, QueryClientProvider } from 'react-query';
import SelectBusinessType from './Pages/Memberpages/MemberRegistration/SelectBusinessType';
import Header from './components/Header/Header';
import NewFooter from './components/Footer/NewFooter';
import MemberRegistration from './Pages/Memberpages/MemberRegistration/MemberRegistration';

const queryClient = new QueryClient();
function App() {
 const UserLayout = () => {
   return (
     <div>
       <div className="sticky top-0 z-50 bg-white">
         <Header />
       </div>
       <QueryClientProvider client={queryClient}>
         <main className="mx-auto flex max-w-[1760px] flex-col justify-center">
           <Outlet /> {/* Nested routes will render here */}
         </main>
       </QueryClientProvider>
       {/* <Footer /> */}
       <NewFooter />
     </div>
   );
 };
  return (
    <>
      <BrowserRouter>
        {/* User Pages */}
        {/* <QueryClientProvider client={queryClient}> */}
        <Routes>
          <Route>
            <Route element={<UserLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="select-business-type"
                element={<SelectBusinessType />}
              />
              <Route
                path="member-registration"
                element={<MemberRegistration />}
              />
            </Route>
          </Route>
        </Routes>
        {/* </QueryClientProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App
