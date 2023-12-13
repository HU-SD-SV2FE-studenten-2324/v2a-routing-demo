import router from '../app';

import './pages/HomePage';
import './pages/RepairFormPage';
import './pages/RepairPage';

router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/repair-form', component: 'repair-form-page' },
  { path: '/repair/:id', component: 'repair-page' },
  { path: '(.*)', component: 'home-page' }
]);
