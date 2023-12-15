import { router, BASE } from '../app';

import './pages/HomePage';
import './pages/RepairFormPage';
import './pages/RepairPage';

router.setRoutes([
  { path: `${BASE}/`, component: 'home-page' },
  { path: `${BASE}/repair-form`, component: 'repair-form-page' },
  { path: `${BASE}/repair/:id`, component: 'repair-page' },
  { path: `(.*)`, component: 'home-page' }
]);
