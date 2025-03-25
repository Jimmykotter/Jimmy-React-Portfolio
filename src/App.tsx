import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';

const router = createBrowserRouter([{
path: '/',
element: <Home/>,
},
{
  path: '/About',
  element: <About/>,
  },
  {
    path: '//Contact',
    element: <Contact/>,
    },
    {
      path: '/Portolio',
      element: <Portfolio/>,
      },
      {
        path: '/Resume',
        element: <Resume/>,
        },
]);

function App() {
  return (
    <>
<RouterProvider router={router} />
  </>
  );
};

export default App

