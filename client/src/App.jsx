import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
  HomeLayout, 
  Home, 
  Error,
  AdminLogin,
  AdminDashboard,
  Services,
  Blogs,
  GalleryEvents,
  Feedback,
  ContactUs
  
} from "./pages";





const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/gallery-events",
        element: <GalleryEvents />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },

  {
    path:'/admin',
    element: <AdminLogin />,
    
  },
  {
    path:'/admin-dashboard',
    element: <AdminDashboard />,
    
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
