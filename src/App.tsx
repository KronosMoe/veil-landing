import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Home from './pages/Home'
import { BASE_PATH, PRIVACY_POLICY_PATH, TERM_OF_SERVICE_PATH } from './constants/routes'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_PATH} element={<Home />} />
        <Route path={TERM_OF_SERVICE_PATH} element={<TermsOfService />} />
        <Route path={PRIVACY_POLICY_PATH} element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
