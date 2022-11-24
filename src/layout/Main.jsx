import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import FooterSection from '../shared/FooterSection';
import Header from '../shared/Header';

export const DarkContext = createContext([]);

const Main = () => {
  const [darkModeOn, setDrkModeOn] = useState(false)

  return (
    <DarkContext.Provider value={[darkModeOn, setDrkModeOn]}>
      <div className={darkModeOn ? "dark bg-white" : " bg-white"}>
        <Header></Header>
        <Outlet></Outlet>
        <FooterSection></FooterSection>
      </div>
    </DarkContext.Provider>
  );
};
export default Main;