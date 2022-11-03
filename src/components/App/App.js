import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import AboutMe from '../AboutMe/AboutMe';
import Price from '../Price/Price';
import Portfolio from '../Portfolio/Portfolio';
import Portfolio_2 from '../Portfolio/Portfolio_2';
import Portfolio_3 from '../Portfolio/Portfolio_3';
import Portfolio_4 from '../Portfolio/Portfolio_4';
import Portfolio_5 from '../Portfolio/Portfolio_5';
import Contacts from '../Contacts/Contacts';
import ServicesMe from '../ServicesMe/ServicesMe';
import ServicesMe_1 from '../ServicesMe/ServicesMe_1';
import { useState } from 'react';
import { InfoToolTip } from '../InfoToolTip/InfoToolTip';

function App() {
  const [selectedCard, setSelectedCard] = useState({});
  const [isInfoTooltipOpen, setInfoTooltip] = useState(false);
  const closePopupsMessage = () => {
    setInfoTooltip(false);
  };
  //открытие попапа с картинкой
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setInfoTooltip(true);
  };

  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/about'>
          <AboutMe />
        </Route>
        <Route exact path='/services'>
          <ServicesMe />
        </Route>
        <Route exact path='/services_1'>
          <ServicesMe_1 />
        </Route>
        <Route exact path='/price'>
          <Price />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio
            onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/portfolio_2'>
          <Portfolio_2
            onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/portfolio_3'>
          <Portfolio_3
            onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/portfolio_4'>
          <Portfolio_4
            onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/portfolio_5'>
          <Portfolio_5
            onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/contacts'>
          <Contacts />
        </Route>
      </Switch>
      <InfoToolTip
        isOpen={isInfoTooltipOpen}
        onClose={closePopupsMessage}
        card={selectedCard}
      />
    </div>
  )
}

export default App;