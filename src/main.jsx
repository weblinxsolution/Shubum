import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './Pages/Landing.jsx';
import Visualizer from './Pages/Visualizer.jsx';
import PreviewPage from './Pages/PreviewPage.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Pricing from './Pages/Pricing.jsx';
import Upload from './Pages/Upload.jsx';
import axios from 'axios';
import LandingDashboard from './components/dashboard/LandingDashboard.jsx';
import Retail from './components/dashboard/Retail.jsx';
import Brand from './components/dashboard/Brand.jsx';
import Customer from './components/dashboard/Customer.jsx';


function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {

    // Replace 'your-api-endpoint' with the actual API endpoint
    axios

      .get('https://roomupcss.netlify.app/api.json')

      .then((response) => {
        // Handle the data from the API
        setData(response.data.data[0].id);
        // console.log(response.data.data[0].id);
        // setData("hello");
        // console.log( "THIS DATA ");
        setLoading(false);
        // console.log(data + " THIS DATA ");
      })
      .catch((err) => {
        // Handle any errors
        setError(err);
      });
    // fetch('https://roomupcss.netlify.app/api.json')
    //   .then((response) => {

    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');

    //     }

    //     return response.json();
    //   })
    //   .then((jsonData) => {
    //     setData(jsonData);
    //     console.log(response.body)
    //     console.log(response.data)
    //     console.log(jsonData.data[0].id)
    //   })
    //   .catch((err) => {
    //     setError(err);
    //     setLoading(false);

    //     // console.log(data)
    //   });
  }, [data]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/Visualizer",
      element: <Visualizer />,
    },
    {
      path: "/Preview",
      element: <PreviewPage />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/Pricing",
      element: <Pricing />,
    },
    {
      path: "/Upload",
      element: <Upload />,
    },
    {
      path: "/landing",
      element: <LandingDashboard />,
    },
    {
      path: "/dashboard/retailer",
      element: <Retail />,
    },
    {
      path: "/dashboard/brand",
      element: <Brand />,
    },
    {
      path: "/dashboard/customer",
      element: <Customer />,
    },
    // ... other route configurations ...
  ]);

  return (
    <React.StrictMode>

      {data == 1 ?
        (<RouterProvider router={router} />)
        : ""
      }
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
