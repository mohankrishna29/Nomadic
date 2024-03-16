import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Auto from "./pages/auto.jsx"
import Login from "./pages/login.jsx"
import AutoDetail from "./pages/autoDetail.jsx"
import Layout from './components/Layout.jsx'
import Dashboard from "./host/dashboard.jsx"
import Reviews from "./host/reviews.jsx"
import Income from "./host/income.jsx"
import Automobiles from "./host/automobiles.jsx"
import HostAutomobiles from "./host/hostautomobiles.jsx"
import HostLayout from './components/hostLayout.jsx'
import HostAutoDetail from "./host/hostAutoDetail.jsx"
import HostAutoPhotos from "./host/hostAutoPhotos.jsx"
import HostAutoPricing from "./host/hostAutoPricing.jsx"
import ErrorPage from "./errors.jsx"
import AuthRequired from './host/authRequired.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/auto' Component={Auto} />
          <Route path='/login' Component={Login} />
          <Route path='/auto/:id' Component={AutoDetail} />

          <Route Component={AuthRequired}>
            <Route path='/host' Component={HostLayout}>
              <Route path='/host' Component={Dashboard} />
              <Route path='/host/income' Component={Income} />
              <Route path='/host/automobiles' Component={Automobiles} />
              <Route path='/host/automobiles/:id' Component={HostAutomobiles}>
                  <Route index Component={HostAutoDetail} />
                  <Route path='/host/automobiles/:id/pricing' Component={HostAutoPricing} />
                  <Route path='/host/automobiles/:id/photos' Component={HostAutoPhotos} />
              </Route>
              <Route path='/host/reviews' Component={Reviews} />
              </Route>
            </Route>
          <Route path='*' Component={ErrorPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
