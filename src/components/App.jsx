import { RecipeList } from './RecipeList/RecipeList';
import InitialRecipes from '../recipes.json';
import { Toaster } from 'react-hot-toast';

import { Layout } from './Layout/Layout';
import { Counter } from './Counter/Counter';
import { LoginForm } from './Form/LoginForm';
import { SignUpForm } from './Form/RegistrationForm';
import { RecipeForm } from './RecipeForm/RecipeForm';
import { Clock } from './Clock/Clock';
import { AppWrapper } from './App.styled';
// import { Search } from './Search/Search';
// import { NewsList } from './NewsList/NewsList';
import { useState, useEffect } from 'react';
import { Player } from './Player/Player';
// import {
//   Routes, // instead of "Switch"
//   Route,
// } from 'react-router-dom';
// import { BreedSelect } from './BreedSelect/BreedSelect';

const getInitialRecipes = () => {
  const savedRecipes = localStorage.getItem('recipes');
  if (savedRecipes !== null) {
    const parsedRecipes = JSON.parse(savedRecipes);
    return parsedRecipes;
  }
  return InitialRecipes;
};

export const App = () => {
  const [recipes, setRecipes] = useState(getInitialRecipes());
  // const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  // const handleSubmit = searchText => {
  //   setTextSearch(prevState => [...prevState, searchText]);
  // };

  // const handleSubmit = searchText => {
  //   setTextSearch(searchText);
  // };

  const deleteRecipe = id => {
    setRecipes(prevState => prevState.filter(recipe => recipe.id !== id));
  };

  const addRecipe = newRecipe => {
    setRecipes(prevState => [...prevState, newRecipe]);
  };

  return (
    <Layout>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
        }}
      />
      {/* <Search onSearch={handleSubmit} /> */}
      {/* <NewsList searchText={textSearch} /> */}
      <RecipeList items={recipes} onDelete={deleteRecipe} />
      <RecipeForm onSubmit={addRecipe} />
      <AppWrapper>
        <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
      </AppWrapper>

      <AppWrapper>
        <Counter />
        <Clock />
      </AppWrapper>

      <LoginForm />
      <SignUpForm />
      {/* <Routes>
        <Route exact path="/signup" element={<BreedSelect />} />
      </Routes> */}
    </Layout>
  );
};
