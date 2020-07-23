import React from 'react';
import {Link} from 'react-router-dom'
import {dataBase} from '../components/dataBase'
import Board from '../components/board'
import Card from '../components/Card'
import Button from '@material-ui/core/Button'; 



class MainPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      storyName:null,
      storyDescription:null,
      image:null,
      date:null,
      
    
    }
    this.loadingStory=this.loadingStory.bind(this)
  }
  
  loadingStory(obj){
    
    this.setState({
      storyName:obj.storyName,
      storyDescription:obj.storyDescription,
      image:obj.image,
      date:obj.mainPageDate,
    })
     
  }
 

  
  
  
    render(){
    
      return (
    <div id="containerBoard" className="container">
      <div className="textAndImage">
        <div className="mainText">
          <h1 style={{
           fontSize:30, 
           fontStyle:'italic'
              }}>      
               {this.state.storyName} </h1>
          <p style={{marginTop:25}}>{this.state.date} </p>
          <p className="nocvar">{this.state.storyDescription}</p>
        </div>
        
        <img className="largePic" alt ="" src ={this.state.image}/>
      </div>
      <Link className="toCreatePage" to='/CreateExp'>
        <Button variant="contained" color="primary" className="noDecoration"  >Create a new story</Button>
      </Link>
      <Board className="trashBlock">
      <img className="trash"src="/trash.png" alt="" />
      </Board>
      <Board  className="netflixslide">
        {
        dataBase.map((obj)=>

        <Card className="smallPic"
              draggable="true" 
              image={obj.image} 
              src={obj.image} alt="" 
              id={obj.id}
              onClick={this.loadingStory.bind(this, obj)}/>)}
        
      </Board>
     
    </div>
      )
    }
  }
  
  export default MainPage