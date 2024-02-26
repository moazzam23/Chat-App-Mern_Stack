import React, { lazy } from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'


const Home = lazy(()=>import('./Pages/Home'))
const Login = lazy(()=>import('./Pages/Login'))
const Chat = lazy(()=>import('./Pages/Chat'))
const Group = lazy(()=>import('./Pages/Group'))

const App = () => {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/chat/:id' element={<Chat/>}/>
    <Route path='/group' element={<Group/>}/>
  </Routes>
</Router>
  )
}

export default App