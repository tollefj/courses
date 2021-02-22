import React from 'react';
import './global.css';
import { Select } from './components/selector/Select';
import { Button } from './components/button/Button';
import { Header } from './components/header/Header';
import bgImg from './assets/images/bridge.jpg'

const SampleUser = {
    name: 'Ada Myhren',
    initials: 'AM'
}

const SampleMenu = [
    { field: 'Map', url: '/map' },
    { field: 'Data', url: '/data' }
];

function App() {
  return (
    <>
      <Header userName={SampleUser} menuItems={SampleMenu} />
        <div id='content' style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <h1>DEMO</h1>
          <h2>demo of wide</h2>
          <Select label='wide select' size='wide'>
            this is a child of wide select
            this is a child of wide select
            this is a child of wide select
            this is a child of wide select
            this is a child of wide select
            this is a child of wide select
            this is a child of wide select
            this is a child of wide select
            this is a child of wide select
            this is a child of wide select
          </Select>
          <h2>demo of narrow</h2>
          <Select label='narrow select' size='narrow'>
            this is a child of narrow select
            this is a child of narrow select
            this is a child of narrow select
          </Select>
          <h2>buttons</h2>
          <Button label='testbtn' mode='primary' size='large' />
          <br/>
          <Button label='testbtn' mode='secondary' size='medium' />
        </div>
    </>
  );
}

export default App;
