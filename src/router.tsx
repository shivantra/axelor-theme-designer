import { createHashRouter } from 'react-router-dom';

import App from './App';
import { Designer, HomePage } from './pages';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'designer',
        element: <Designer />,
      },
    ],
  },
]);

export default router;
