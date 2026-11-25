import './App.css'
import './index.css'
import MaxCard from './components/MaxCard';
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
          <MaxCard name="Card 1 " title="firest card" size={33} />
          <MaxCard name="Card 2 " title="second card" size={43} />
          <MaxCard name="Card 3 " title="thered card" size={44} />
          <MaxCard name="Card 4 " title="last card" size={41} />
          <MaxCard name="Card 5 " title="5 card" size={44} />
          <MaxCard name="Card 6 " title="6 card" size={41} />
        </div>
      </main>
    <Foter />
  </div>
 </>
);
}
export default App;