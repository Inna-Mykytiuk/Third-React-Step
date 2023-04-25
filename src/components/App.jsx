// import { Toaster } from 'react-hot-toast';
// import { Layout } from './Layout/Layout';
// import { AppWrapper } from './App.styled';
// import { useState, useEffect } from 'react';
// import { BreedSelect } from './BreedSelect/BreedSelect';
// import AboutText from './AboutText/AboutText';

import {
  Routes, // instead of "Switch"
  Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import Dogs from './Pages/Dogs';
import DogDetails from './Pages/DogDetails';
import { SharedLayout } from './SharedLayout/SharedLayout';
import About from './Pages/About';
import Text1 from './AboutText/Text1';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route exact path="about" element={<About />}>
          <Route path="text1" element={<Text1></Text1>} />
          <Route path="text2" element={<div>text2</div>} />
        </Route>
        <Route exact path="dogs" element={<Dogs />} />
        <Route exact path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<div>subbreeds</div>} />
          <Route path="gallery" element={<div>gallery</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
