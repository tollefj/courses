import React from 'react';
import './global.css';
import { Select } from './components/selector/Select';
import { Button } from './components/button/Button';
import { Header } from './components/header/Header';
import bgImg from './assets/images/bridge.jpg'
import { Card } from './components/card/Card';

import MapIcon from './assets/pages/map.png';
import DataIcon from './assets/pages/data.png';

const SampleUser = {
    firstName: 'Ada',
    lastName: 'Myhren',
    initials: 'AM'
}

const SampleMenu = [
    { label: 'Map', url: '/map' },
    { label: 'Data', url: '/data' }
];

const CardData = [
  {
    id: 0,
    title: 'Utforsk kart og måledata',
    description: 'Se skraverte områder med modeller og målestasjoner på et kart og last ned tilhørende data',
    icon: MapIcon
  },
  {
    id: 1,
    title: 'Søk, last opp og last ned data',
    description: 'Her finner du all tilgjengelig data. Filtrer og søk, last ned eller last opp nye filer og utforsk APIet',
    icon: DataIcon
  }
]

function App() {
  console.log('img:', MapIcon)
  return (
    <>
      <Header user={SampleUser} menuItems={SampleMenu} />
      <div id='content' style={{
        // backgroundImage: `url(${bgImg})`,
        backgroundColor: 'black',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <h1>DEMO</h1>
        <div class='delutb-app--cards'>
          {CardData.map((card) => (
            <Card key={card.id} title={card.title} description={card.description} icon={card.icon}/>
          ))}
        </div>
        <Select label='wide select' size='wide'>
          this is a child of wide select
          this is a child of wide select
        </Select>
        <Select label='narrow select' size='narrow'>
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
