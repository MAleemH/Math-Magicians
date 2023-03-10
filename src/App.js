/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Calculator from './components/calculator';
import Quote from './components/quote';
import NotMatch from './components/notMatch';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
