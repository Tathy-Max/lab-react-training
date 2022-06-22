import { IdCard } from './components/IdCard';
import { Greetings } from './components/Greetings';
import { Random } from './components/Random';
//import john from './assets/images/john.jpg';
//import obrien from './assets/images/obrien.jpg';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Id Card</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={'1992-07-14'}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          //picture={<img src={john} alt="John" />}
        />

        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={'1988-05-11'}
          picture="https://randomuser.me/api/portraits/women/8.jpg"
          //picture={<img src={obrien} alt="Obrien" />}
        />
      </div>
      <div className="Greeting">
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div className="Random">
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
    </div>
  );
}

export default App;
