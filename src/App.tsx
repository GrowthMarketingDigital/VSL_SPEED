import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

//Components
import Header from './components/Header/Header'
import Cadastro from './components/Main/Main'
import Footer from './components/Footer/Footer'
import CommentSection from './components/Comments/Comments';

//pages
import Termos from './pages/Termos/Termos';
import Politicas from './pages/Politicas/Politicas';

//styles
import "./index.css"

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/termos' && '/politicas' && <Header />}
      {location.pathname !== '/termos' && '/politicas' && <Cadastro />}
      {location.pathname !== '/termos' && '/politicas' && <CommentSection />}
      {location.pathname !== '/termos' && '/politicas' && <Footer />}
    </>
  );
}
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/termos' element={<Termos />} />
        <Route path='/politicas' element={<Politicas />} />
      </Routes>
    </Router>
  )
}

export default App