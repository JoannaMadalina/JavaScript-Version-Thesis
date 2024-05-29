import React from 'react';
import './App.css';
import Navbar from './UI Components/Global components/Navbar';
import SliderComponent from './UI Components/Small components/AllProducts';
import HomeBanner from './UI Components/Small components/HomeBanner';
import Board from './UI Components/Small components/Board';
import Card from './UI Components/Small components/Card';
import DummyCard from './UI Components/Small components/DummyCard';

const App = () => {

  return (
    <div className="App">
      <main>
        <Navbar />
        <br></br>
        <HomeBanner />
        <br></br>

          <div className="flex-box">
            <SliderComponent id="slider-1" className="slider"></ SliderComponent>
              <DummyCard id="card-dummy" className="card-dummy" draggable="true">
                <p>Dummy Card</p>
              </DummyCard>
          </div> 

        <br></br>

          <div className="flexbox">

            <Board id="board-1" className="board">
              <Card id="card-1" className="card" draggable="true">
                <p>Card One</p>
              </Card>
            </ Board> 

            <Board id="board-2" className="board">
              <Card id="card-2" className="card" draggable="true">
                <p>Card Two</p>
              </Card>
            </ Board> 

          </div>
      </main>
    </div>
  );
};

export default App;