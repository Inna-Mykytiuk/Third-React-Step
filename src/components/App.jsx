// import { Toaster } from 'react-hot-toast';

import { Layout } from './Layout/Layout';

import { AppWrapper } from './App.styled';

// import { useState, useEffect } from 'react';

import {
  Routes, // instead of "Switch"
  Route,
  NavLink,
} from 'react-router-dom';
// import { BreedSelect } from './BreedSelect/BreedSelect';
import Home from './Pages/Home';
import Dogs from './Pages/Dogs';
import DogDetails from './Pages/DogDetails';

export const App = () => {
  return (
    <Layout>
      <AppWrapper>
        <ul>
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Colection</NavLink>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dogs" element={<Dogs />} />
          <Route exact path="/dogs/:dogId" element={<DogDetails />} />
        </Routes>
      </AppWrapper>
    </Layout>
  );
};
