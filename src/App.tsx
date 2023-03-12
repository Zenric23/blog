import { useContext } from 'react'
import Home from "./pages/Home"
import Blog_home from "./pages/Blog_home"
import Blog_read from "./pages/Blog_read"
import Add_blog from "./pages/Add_blog"
import Profile from "./pages/Profile"
import { 
  Routes,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'
import { UserContext } from './context/userContext'

function App() {

  const { state } = useContext(UserContext)
  
  const PrivateRoutes = () => {
    return (
      state.user ? <Outlet /> : <Navigate to="/" /> 
    )
  }

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={state.user ? <Blog_home /> : <Home />} />    
        <Route element={<PrivateRoutes />}>
          <Route path="/add-blog" element={<Add_blog />} />        
        </Route>            
        <Route path="/profile/:id" element={<Profile />} />        
        <Route path="/edit-blog" element={<Home />} />    
        <Route path="/blog/:id" element={<Blog_read />} />        
      </Routes>
    </div>
    </>
  )
}

export default App
