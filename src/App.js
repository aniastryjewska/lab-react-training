import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';


 function App() {
   return (
    <div className="App">
     <IdCard
   lastName='Doe'
   firstName='John'
   gender='male'
   height={178}
   birth={new Date("1992-07-14")}
   picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<br/>
<IdCard
  lastName='Delores'
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<br/>
      
<h1>Greetings</h1>
<Greetings lang="de">Hallo Ludwig</Greetings>
<br/>
<Greetings lang="fr">Bonjour François</Greetings>

<h1>Random</h1>
<Random min={1} max={6}/>
<br/>
<Random min={1} max={100}/>

<h1>BoxColor</h1>
<BoxColor r={255} g={0} b={0} />
<br/>
<BoxColor r={128} g={255} b={0} />
</div>


   );
 }



export default App;
