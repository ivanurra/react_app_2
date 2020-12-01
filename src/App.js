import './App.css';
import React from 'react'
import Cities from './components/Cities'

class App extends React.Component {

  state = {
    username: 'ivanurra',
    email: 'ivanurra@ivanurra.com',
    amountOfMoney: 50,
    admin: true,
    cities: ['Madrid', 'Granada', 'Lugo', 'Sevilla', 'Barcelona'],
    aligment: 'center',
    changeAlignment: () => {
      this.state.aligment === 'center'
        ? this.setState({aligment: 'left'})
        : this.setState({aligment: 'center'})
    }
  }

  changeUsername = () => {
    this.state.username === 'ivanurra' 
    ? this.setState({username: 'pedrovargas', amountOfMoney: 50, admin: false})
    : this.setState({username: 'ivanurra', amountOfMoney: 50, admin: true})
  }

  // renderAdminMessage = () =>{
  //   if(this.state.admin){
  //     return <h2>WELCOME ADMIN!</h2>
  //   }
  //   return
  // }

  changeAmountOfMoney = (_operation) => {
    if(_operation === 'add'){
      this.setState({amountOfMoney: this.state.amountOfMoney + 10})
    } else if (_operation === 'substract') {
      this.setState({amountOfMoney: this.state.amountOfMoney - 10})
    }
  }

  render(){
    return (
      <div className="App">
          <h1>- MAIN PAGE -</h1>
          {/* {this.renderAdminMessage()} */}
          {this.state.admin && <h2>WELCOME ADMIN!!</h2>}
          <h2>Hello, {this.state.username}</h2>
          {/* <button onClick={this.changeUsername}>Change username</button> */}
          <button onClick={()=>this.changeUsername()}>Change username</button>
          <p>Money: {this.state.amountOfMoney}$</p>
          <button onClick={()=>this.changeAmountOfMoney('add')}>Add 10$</button>
          <button onClick={()=>this.changeAmountOfMoney('substract')}>Remove 10$</button>
          <Cities 
            cities={this.state.cities} 
            aligment={this.state.aligment}
            changeAlignment={this.state.changeAlignment}  
          />
      </div>
    )
  } 
}

export default App;
