import React from 'react'
import './App.css';

import Cities from './components/Cities'
import Pets from './components/Pets'

class App extends React.Component {

  state = {
    username: 'jaimejacobo',
    email: 'jaime@jaime.com',
    amountOfMoney: 50,
    admin: true,
    cities: ['Madrid', 'Granada', 'Sevilla', 'Barcelona', 'Lugo'],
    alignment: 'center',

    changeAlignment: () => {
      this.state.alignment === 'center' 
        ? this.setState({alignment: 'left'}) 
        : this.setState({alignment: 'center'})
      },

    pets: [
      {animal: 'dog', name: 'Maya'},
      {animal: 'dog', name: 'Jordi'},
      {animal: 'cat', name: 'Misifu'},
      {animal: 'horse', name: 'Firulais'}
    ],

    deletePet: (index)=>{
      // const newPets = this.state.pets.filter((pet)=>{
      //   return pet.name !== _name
      // })
      // this.setState({pets: newPets})
      const copyOfPets = [...this.state.pets]
      copyOfPets.splice(index, 1)
      this.setState({pets: copyOfPets})
    },

    addPet: (event) => {

      event.preventDefault()
      const copyOfPets = [...this.state.pets]
      copyOfPets.unshift(this.state.temporalNewAnimal)
      this.setState({pets: copyOfPets})
      
    },

    temporalNewAnimal: {animal: '', name: ''},

    updateAnimals: (_name, _value) => {

      const copyOfTemporalNewAnimal = {...this.state.temporalNewAnimal}

      if(_name === 'animal'){
        copyOfTemporalNewAnimal.animal = _value
      } else if(_name === 'name'){
        copyOfTemporalNewAnimal.name = _value
      }

      this.setState({temporalNewAnimal: copyOfTemporalNewAnimal})
    }
  }

  changeUsername = () => {
    this.state.username === 'jaimejacobo' 
      ? this.setState({username: 'pedrovargas', amountOfMoney: 50}) 
      : this.setState({username: 'jaimejacobo', amountOfMoney: 50})
  }

  changeAmountOfMoney = (_operation) => {
    if(_operation === 'add'){
      this.setState({amountOfMoney: this.state.amountOfMoney + 10})
    } else if(_operation === 'substract'){
      this.setState({amountOfMoney: this.state.amountOfMoney - 10})
    }
  }

  render(){
    return (
      <div className="App">

        <h1>Main page</h1>
        {this.state.admin && <h2>WELCOME ADMIN!!!</h2>}

        <h2>Hello, {this.state.username}</h2>
        <button onClick={()=>this.changeUsername()}>Change username</button>

        <p>Money: {this.state.amountOfMoney}$</p>
        <button onClick={()=>this.changeAmountOfMoney('add')}>Add 10$</button>
        <button onClick={()=>this.changeAmountOfMoney('substract')}>Remove 10$</button>

        <Cities 
          cities={this.state.cities} 
          alignment={this.state.alignment} 
          changeAlignment={this.state.changeAlignment}
        />

        <Pets 
          pets={this.state.pets} 
          deletePet={this.state.deletePet} 
          addPet={this.state.addPet}
          temporalNewAnimal={this.state.temporalNewAnimal}
          updateAnimals={this.state.updateAnimals}
        />

      </div>
    );    
  }
} 

export default App;