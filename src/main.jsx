import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Jobss from './Components/Jobs/Jobss.jsx';
import Regestation from './Components/Regestation/Regestation.jsx';
import Blog from './Components/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/job/:jobId",
        loader:()=>fetch('Jobs.json'),
        element:<JobDetails></JobDetails>
      },
      {
        path:"/Applied",
        loader:()=>fetch('Jobs.json'),
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:"/Jobs",
        loader:()=>fetch('Jobss.json'),
        element:<Jobss></Jobss>
      },
      {
        path:"/Registration",
        element:<Regestation></Regestation>
      },
      {
        path:"/Blogs",
        element:<Blog></Blog>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
