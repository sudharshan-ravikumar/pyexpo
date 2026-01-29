
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import ImmediateAction from './pages/solutions/ImmediateAction';
import Decision from './pages/solutions/Decision';
import Prevention from './pages/solutions/Prevention';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/solution/step-1" element={<ImmediateAction />} />
          <Route path="/solution/step-2" element={<Decision />} />
          <Route path="/solution/step-3" element={<Prevention />} />
          {/* Fallback route just in case */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
