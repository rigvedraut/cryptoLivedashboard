// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Search from "./pages/Search";
// import CoinPage from "./pages/CoinPage";
// import Compare from "./pages/Compare";
// import DetailedChart from "./pages/DetailedChart";
// import Exchange from './Componets/Exchange.js';
// import { UserProvider } from "./contexts/user.context";
// import Home from "./pages/Home";
// import Login from "./pages/Login.page";
// import PrivateRoute from "./pages/PrivateRoute.page";
// import Signup from "./pages/Signup.page";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


// function App() {
//   const setInitialTheme = `
//   function getUserPreference() {
//     if(window.localStorage.getItem('theme')) {
//       return window.localStorage.getItem('theme')
//     }
//     return window.matchMedia('(prefers-color-scheme: light)').matches 
//       ? 'light' 
//       : 'dark'
//   }
//   document.body.dataset.theme = getUserPreference();
// `;
//   return (
//     <>
//       <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
//       <div className="cursor" id="cursor"></div>
//       <div className="cursor-pointer" id="cursor-pointer"></div>
//       <BrowserRouter>
//         <UserProvider>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route element={<PrivateRoute />}>
//               <Route path="/" element={<Home />} />
//               <Route path="/exchange" element={<Exchange />} />
//               <Route path="/" element={<Home />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/search" element={<Search />} />
//               <Route path="/coin" element={<CoinPage />} />
//               <Route path="/chart" element={<DetailedChart />} />
//               <Route path="/compare" element={<Compare />} />
//             </Route>
//           </Routes>
//         </UserProvider>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;





import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import CoinPage from "./pages/CoinPage";
import Compare from "./pages/Compare";
import DetailedChart from "./pages/DetailedChart";
import { UserProvider } from "./contexts/user.context";
import Login from "./pages/Login.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signup from "./pages/Signup.page";
import News from "./pages/News.page.js";
function App() {
  const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme')
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches 
      ? 'light' 
      : 'dark'
  }
  document.body.dataset.theme = getUserPreference();
`;
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      <div className="cursor" id="cursor"></div>
      <div className="cursor-pointer" id="cursor-pointer"></div>

      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/search" element={<Search />} />
              <Route path="/coin" element={<CoinPage />} />
              <Route path="/chart" element={<DetailedChart />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/news" element={<News/>} />

            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;



