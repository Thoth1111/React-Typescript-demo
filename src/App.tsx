import './App.css';
// import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';
// import Heading from './components/Heading';
// import Diego from './components/Diego';
import Button from './components/Button';
import Input from './components/Input';

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
      {/* <Greet name="Alwyn" isLoggedIn={false}/> */}
      {/* <Person name={personName}/>
      <PersonList names={nameList}/> */}
      {/* <Status status="loading"/>
      <Heading>Placeholder text</Heading>
      <Diego>Diego has Walter's ticket</Diego> */}
      <Button
        handleClick={(event) => {
          console.log('Button clicked', event)
        }}
      />
      <Input value="" handleChange={(event) => {
        console.log(event)
      }
      } />
    </div>
  );
}

export default App;
