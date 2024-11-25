import Home from './Pages/RootPages/Home'
import About from './Pages/RootPages/About'
import Contect from './Pages/RootPages/Contect'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import PagenotFound from './Pages/RootPages/PagenotFound'
import RootLayout from './Layout/RootLayout'
import Login from './Pages/RootPages/Login'
import Form from './Pages/UsersPages/Form'
import Info from './Pages/UsersPages/Info'
import UserLaout from './Layout/UserLaout'
import Users from './Pages/RootPages/Users'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Contect" element={<Contect/>}/>

          <Route path="Users" element={<UserLaout/>}>
              <Route index element={<Users/>}/>
              <Route path="Info" element={<Info/>}/>
              <Route path="Form" element={<Form/>}/>
          </Route>

          <Route path="Login" element={<Login/>}/>
          <Route path="*" element={<PagenotFound/>}/>
      </Route>
       
    )
  );
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App 