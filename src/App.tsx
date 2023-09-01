import './App.css';
import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Diego from './components/Diego';

function App() {
  // const personName = {
  //   first: 'Alwyn',
  //   last: 'Madiba'
  // }

  // const nameList = [
  //   {
  //     first: 'Alwyn',
  //     last: 'Madiba'
  //   },
  //   {
  //     first: 'Nelson',
  //     last: 'Osho'
  //   },
  //   {
  //     first: 'Alfred',
  //     last: 'Sadhguru'
  //   }
  // ]

  return (
    <div className="App">
      <Greet name="Alwyn" isLoggedIn={false}/>
      {/* <Person name={personName}/>
      <PersonList names={nameList}/> */}
      <Status status="loading"/>
      <Heading>Placeholder text</Heading>
      <Diego>Diego has Walter's ticket</Diego>
    </div>
  );
}

export default App;
