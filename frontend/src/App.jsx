import './App.css'
import './index.css'
import Container from './components/Container/Container';
import Header from './components/layout/Header';
import Foter from './components/layout/Foter';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';



function App() {
  return (
 <>
 <div className="app">
    <Header />
    <CategoryFilter />
      <main>
        <div className="maxcard">
          <Container />
          {/* 
          <MaxCard coures="Card 1 " title="firest card" size={33} />
          <MaxCard coures="Card 2 " title="second card" size={43} />
          <MaxCard coures="Card 3 " title="thered card" size={44} />
          <MaxCard coures="Card 4 " title="last card" size={41} />
          <MaxCard coures="Card 5 " title="5 card" size={44} />
          <MaxCard coures="Card 6 " title="6 card" size={41} /> */}
        </div>
      </main>
    <Foter />
  </div>
 </>
);
}
export default App;