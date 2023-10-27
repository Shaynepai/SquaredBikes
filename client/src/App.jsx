
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Squarebikes from './pages/Squarebikes'
import UserProfileLayout from './components/UserLayout/UserProfileLayout'
import UserProfileData from './pages/UserProfileData'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import LoginPageLayout from './components/Layout/LoginandSignupPageLayout/PageLayout'
import ProfileEdit from './pages/ProfileEdit'

function App() {
 
  return (

    <>
      
       <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Squarebikes />}/>
      
        </Route>

        <Route path='/User' element={<UserProfileLayout />}>
        <Route index element={<UserProfileData />} />
        </Route>


        <Route path='/LoginPage' element={<LoginPageLayout />} >
        <Route index element={<LoginPage />}/>
        <Route path='SignupPage' element={<SignupPage />} />
        <Route path='Edit' element={<ProfileEdit />} />
        </Route>



       </Routes>
    
    </>
  )
}

export default App
