import React from 'react';
import './global.css';
import { Select } from './components/selector/Select';
import { Button } from './components/button/Button';
import { Header } from './modules/header/Header';
import bgImg from './assets/images/e39.jpg'
import { Card } from './components/card/Card';

import MapIcon from './assets/pages/map.png';
import DataIcon from './assets/pages/data.png';
import { ListCard } from './modules/list/ListCard';
import { NcfMetadata } from './sharedTypes/Ncf';
import { ListCardWrapper } from './modules/list/ListCardWrapper';
import { Search } from './components/search/Search';
import { MeasureFilter } from './modules/MeasureFilter/MeasureFilter';
import { measuringIcons } from './utils/measuringIcons';

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

const ButtonsAndSelections = () => (
  <>
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
  </>
)

const Cards = () => (
  <div className='delutb-app--cards'>
    {CardData.map((card) => (
      <Card key={card.id} title={card.title} description={card.description} icon={card.icon}/>
    ))}
  </div>
)

const MetaData : NcfMetadata = {
  time: {
    start: new Date("06-Jan-2015"),
    end: new Date("31-Jan-2015")
  },
  project: "Bjørnafjorden",
  documentation: "Wave and current measurements in Bjørnafjorden. Data report 6, Hørsholm: DHI",
  location: "BFA1",
  position: {
    X: "298224",
    Y: "6670166",
    Z: "-21.8"
  },
  file: {
    creationDate: new Date("28-Mar-2018"),
    createdBy: "Daha"
  }
}

const AllListItems : NcfMetadata[] = new Array(20).fill(MetaData);

function App() {
  console.log('img:', MapIcon)
  return (
    <>
      <Header user={SampleUser} menuItems={SampleMenu} />
      <div id='content' style={{
        // backgroundImage: `url(${bgImg})`,
        backgroundColor: '#f5f5f5',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <h1>DEMO</h1>
        <MeasureFilter icon={measuringIcons['wind']} text='Vinddata' />
        <MeasureFilter icon={measuringIcons['wave']} text='Bølgedata' />
        <MeasureFilter icon={measuringIcons['current']} text='Strømdata' />
        <MeasureFilter icon={measuringIcons['depth']} text='Dybdedata' />
        {/* <ListCardWrapper data={AllListItems} /> */}
      </div>
    </>
  );
}

export default App;
