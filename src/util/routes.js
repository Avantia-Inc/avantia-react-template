import Home from '../components/Home/Home.scene';
import NotFound from '../components/Error/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    page: Home,
  },
  {
    path: null,
    page: NotFound,
  },
];

export default routes;
