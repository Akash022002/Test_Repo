import logo from './logo.svg';
import './App.css';
import Navnew from './Component/NavNew';
import Home from './Component/Home';
import MainComp from './Component/MainComp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorNew from './Component/ErrorNew';
import About from './Component/About';
import Contact from './Component/Contact';

const Route = createBrowserRouter([
  {path:'/', element:<Home></Home>},
  {path:'*' ,element:<ErrorNew></ErrorNew>},
  {path:'/about', element:<About></About>},
  {path:'/contact', element:<Contact></Contact>}
])

function App() {
  return (
    <div className="App">
         <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;
