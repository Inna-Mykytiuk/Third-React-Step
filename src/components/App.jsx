// import { Toaster } from 'react-hot-toast';

import { Layout } from './Layout/Layout';

import { AppWrapper } from './App.styled';

// import { useState, useEffect } from 'react';

import {
  Routes, // instead of "Switch"
  Route,
} from 'react-router-dom';
// import { BreedSelect } from './BreedSelect/BreedSelect';
import Home from './Pages/Home';
import Dogs from './Pages/Dogs';
import DogDetails from './Pages/DogDetails';
import { SharedLayout } from './SharedLayout/SharedLayout';
import About from './Pages/About';

export const App = () => {
  return (
    <Layout>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route exact path="/dogs" element={<Dogs />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/dogs/:dogId" element={<DogDetails />} />
          </Route>
        </Routes>
      </AppWrapper>
    </Layout>
  );
};
