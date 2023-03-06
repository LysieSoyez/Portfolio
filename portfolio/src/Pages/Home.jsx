import * as React from 'react';
import BarTab from '../Composant/Home/BarTab';
import BarTabMobil from '../Composant/Home/BarTabMobil';
import Header from '../Composant/Home/Header.jsx';
import MenuBurg from '../Composant/Home/MenuBurg';

function Home() {
  return (
    <>
    <Header />
    <BarTab />
    <BarTabMobil />
    <MenuBurg />
    </>
  )
}

export default Home;
