import { Toaster } from 'react-hot-toast';

import { Layout } from './Layout/Layout';

import { AppWrapper } from './App.styled';
import { App1 } from './App1';
// import { Search } from './Search/Search';
// import { NewsList } from './NewsList/NewsList';
// import { useState, useEffect } from 'react';

// import {
//   Routes, // instead of "Switch"
//   Route,
// } from 'react-router-dom';
// import { BreedSelect } from './BreedSelect/BreedSelect';

export const App = () => {
  return (
    <Layout>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
        }}
      />

      <AppWrapper>
        <App1 />
      </AppWrapper>

      {/* <Routes>
        <Route exact path="/signup" element={<BreedSelect />} />
      </Routes> */}
    </Layout>
  );
};
