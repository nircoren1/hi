import React from 'react';
import CreateExp from './pages/CreateExp';
import MainPage from './pages/MainPage';
import StartPage from './pages/StartPage';
import {BrowserRouter as Router,Route} from 'react-router-dom';


class App extends React.Component {
    constructor(props){
    super(props)
    this.state={
      cardId:0,
    }

     this.cardId=this.cardId.bind(this)
     this.returnCardId=this.returnCardId.bind(this)
  }
   
  returnCardId(){
       return this.state.cardId
     }
  
  cardId(){
    this.setState({cardId:this.state.cardId+1})
  }
   
    render(){
      return (
    <Router>
      <Route exact path="/MainPage" 
        render={(props) => <MainPage {...props} 
        />} />

      <Route exact path="/CreateExp" 
        render={(props) => <CreateExp {...props} 
        cardId={this.cardId.bind(this)}
        returnCardId={this.returnCardId.bind(this)}
        

      />} />

      <Route path="/" exact component={StartPage} />
      
    
    </Router>
      )
    }
  }
  
  export default App