import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

export function Router() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Dissertation route will be added later */}
        </Routes>
      </Layout>
    </HashRouter>
  )
}
