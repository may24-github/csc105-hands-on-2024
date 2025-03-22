import React from 'react'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom';


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <outlet />
//       <h1>
        
//       </h1>
//     </div>
//   )
// }

// export default App

function App() {
  const location = useLocation();
  const navBarHiddenRoutes = [
    '/login',
    '/signup',
    '/not-found'
  ]

  const showNavbar = !navBarHiddenRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
    </>
  );
}

export default App;