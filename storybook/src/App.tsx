import React from 'react';
import './global.css';
import { Select } from './components/selector/Select';
import { Button } from './components/button/Button';

function App() {
  return (
    <div className='content'>
      <h1>DEMO</h1>
      <h2>demo of wide</h2>
      <Select label='wide select' size='wide'>
        this is a child of wide select
      </Select>
      <h2>demo of narrow</h2>
      <Select label='narrow select' size='narrow'>
        this is a child of wide select
      </Select>
      <h2>buttons</h2>
      <Button label='testbtn' mode='primary' size='large' />
      <br/>
      <Button label='testbtn' mode='secondary' size='medium' />
    </div>
  );
}

export default App;
