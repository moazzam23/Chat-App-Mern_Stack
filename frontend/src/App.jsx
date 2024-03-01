import React, { lazy } from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Protectedroute from './Components/Auth/Protectedroute'
import { Suspense } from 'react'
import { Loader } from './Components/Layout/Loader'


const Home = lazy(()=>import('./Pages/Home'))
const Login = lazy(()=>import('./Pages/Login'))
const Chat = lazy(()=>import('./Pages/Chat'))
const Group = lazy(()=>import('./Pages/Group'))
const Error = lazy(()=>import('./Pages/Error'))
const AdminLogin = lazy(()=>import('./Pages/Admin/AdminLogin'))
const Dashboard = lazy(()=>import('./Pages/Admin/Dashboard'))
const ChatManagement = lazy(()=>import('./Pages/Admin/ChatManagement'))
const GroupsManagement = lazy(()=>import('./Pages/Admin/GroupsManagement'))
const UserManagement = lazy(()=>import('./Pages/Admin/UserManagement'))

let user=true;

const App = () => {
  return (
<Router>
<Suspense fallback={<Loader/>}>
<Routes>
    <Route path='/login' element={<Protectedroute user={!user} redirect='/' > 
      <Login/>
    </Protectedroute> 
      }/>
    <Route element={<Protectedroute user={user}/>} >
    <Route path='/' element={<Home/>}/>
    <Route path='/chat/:id' element={<Chat/>}/>
    <Route path='/group' element={<Group/>}/>
    </Route>

<Route path='/admin' element={<AdminLogin/>} />
<Route path='/admin/dashboard' element={<Dashboard/>} />
<Route path='/admin/chat' element={<ChatManagement/>} />
<Route path='/admin/user' element={<UserManagement/>} />
<Route path='/admin/group' element={<GroupsManagement/>} />

<Route path='*' element={<Error/>}/>

  </Routes>
</Suspense>
</Router>
  )
}

export default App