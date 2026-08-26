import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BASE_PATH, PRIVACY_POLICY_PATH, TERM_OF_SERVICE_PATH } from './constants/routes'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_PATH} element={<Home />} />
        <Route path={TERM_OF_SERVICE_PATH} element={<TermsOfService />} />
        <Route path={PRIVACY_POLICY_PATH} element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
