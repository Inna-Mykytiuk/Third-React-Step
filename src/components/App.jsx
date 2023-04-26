// import { Toaster } from 'react-hot-toast';
// import { BreedSelect } from './BreedSelect/BreedSelect';
// import { Layout } from "./Layout/Layout";
// import { AppWrapper } from "./App.styled";
// import { useState, useEffect } from 'react';

import { SharedLayout } from "./SharedLayout/SharedLayout";

import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Home from "./Pages/Home";
import Dogs from "./Pages/Dogs";
import DogDetails from "./Pages/DogDetails";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route exact path='dogs' element={<Dogs />} />
        <Route exact path='dogs/:dogId' element={<DogDetails />}>
          <Route path='subbreeds' element={<div>subbreeds</div>} />
          <Route path='gallery' element={<div>gallery</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
