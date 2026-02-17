import { Outlet } from 'react-router-dom';

import { Navbar } from './components';
import ScrollToHash from './components/ScrollToHash';
import FeedbackButton from './components/FeedbackForm';

function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <FeedbackButton />
    </>
  );
}

export default App;
