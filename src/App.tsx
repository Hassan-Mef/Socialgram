import { Routes, Route } from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import {Home} from './_root/Pages'
import AuthLayout from './_auth/AuthLayout'
import './globals.css'
import RootLayout from './_root/RootLayout'
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout/>}>
         <Route path="/sign-in" element={<SigninForm />} />
         <Route path="/sign-UP" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout/>}>
          <Route index  element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
}

export default App