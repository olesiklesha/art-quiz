import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './constants';
import { Categories, ErrorPage, Game, Main, Results, Settings } from './pages';
import AppOutlet from './components/App-outlet';

const App = () => {
  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<Main />} />
      <Route path={AppRoutes.APP} element={<AppOutlet />}>
        <Route path={AppRoutes.ART} element={<Categories />} />
        <Route path={AppRoutes.PIC} element={<Categories />} />
        <Route path={AppRoutes.RESULTS} element={<Results />} />
      </Route>
      <Route path={AppRoutes.GAME} element={<Game />} />
      <Route path={AppRoutes.SETTINGS} element={<Settings />} />
      <Route path={AppRoutes.ERROR} element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
