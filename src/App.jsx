import {BrowserRouter,Routes,Route} from 'react-router-dom';
import home from './pages/home';
import signin from './pages/signin';
import signup from './pages/signup';
import about from './pages/about';
import profile from './pages/profile';
export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<home/>} />
      <Route path="/signin" element={<signin/>} />
      <Route path="/signup" element={<signup/>} />
      <Route path="/about" element={<about/>} />
      <Route path="/profile" element={<profile/>} / >
    </Routes>
    </BrowserRouter>
    )
}