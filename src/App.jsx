import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login';
import LoginPage from './LoginPage';

export default function App() {
  
  return (
    <Router>
    <main>
      <Routes>
        <Route exact path="/" element
          ={<Login/>}/>
        <Route exact path="/login" element
          ={<LoginPage/>}/>
      </Routes>
    </main>
    </Router>
  )
}
