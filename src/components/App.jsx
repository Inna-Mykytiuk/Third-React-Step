import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

import {
  Routes, // instead of "Switch"
  Route,
} from 'react-router-dom';

// import Home from './Pages/Home';
// import Dogs from './Pages/Dogs';
// import DogDetails from './Pages/DogDetails';
// import About from './Pages/About';
// import Gallery from './Gallery/Gallery';
// import SubBreeds from './SubBreeds/SubBreeds';

const Home = lazy(() => import('./Pages/Home'));
const DogDetails = lazy(() => import('./Pages/DogDetails'));
const About = lazy(() => import('./Pages/About'));
const Gallery = lazy(() => import('./Gallery/Gallery'));
const SubBreeds = lazy(() => import('./SubBreeds/SubBreeds'));
const Dogs = lazy(() => import('./Pages/Dogs'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<SubBreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
