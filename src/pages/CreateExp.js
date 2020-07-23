import React from 'react';
import {Link} from 'react-router-dom'
import {dataBase} from '../components/dataBase'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button'; 



const divStyle = {
  color: 'blue',
};




class CreateExp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      image: "../logo192.png" ,
      storyName: "" ,
      date:null,
      storyDescription:null ,
      dateValue:null,
      startDate: new Date(),
      mainPageDate: null,
      cardId:0,
      noDate:false


      }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeArea=this.handleChangeArea.bind(this)
    this.onImageChange=this.onImageChange.bind(this)
    this.addItem=this.addItem.bind(this)
    this.handleChangeDate=this.handleChangeDate.bind(this)
    this.onCalendarClose=this.onCalendarClose.bind(this)
    this.noDate=this.noDate.bind(this)
  }
  noDate(){
    let noDate= this.state.noDate
    var x = document.getElementById("datePicker").getAttribute("value");
    if (noDate == false) {
      this.setState({
        noDate:true,
        mainPageDate: this.break()
      })
    } else {
      this.setState({
        mainPageDate:x,
        noDate:false,
      })
    }
    return noDate
  }

  break(){
   return <br/>
  }

  componentDidMount(){
    var x = document.getElementById("datePicker").getAttribute("value");
    this.setState({ mainPageDate: x})
  }
  
  onCalendarClose(){
    var x = document.getElementById("datePicker").getAttribute("value");
    this.setState({
      mainPageDate: x})
  }

  handleChangeDate = date => {
    this.setState({
      startDate: date,
    });
    

    
   
   
  };
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
     var image =URL.createObjectURL(event.target.files[0])
     this.setState({image: image})
     
   }
  }

  handleChange(event) {
    this.setState({storyDescription: event.target.value});
  }


 handleChangeArea(event) {
    this.setState({storyName: event.target.value});
  
 }

 addItem(e){
  e.preventDefault();
  const storyName = this.state.storyName;

  // function to prevent making stories without names
  // if(storyName == ""){
  //   alert("missing story name")
  //   return
  // }
  const storyDescription = this.state.storyDescription
  const returnCardId=this.props.returnCardId()
  const image = this.state.image
  const mainPageDate= this.state.mainPageDate  
  const obj = {'id': returnCardId,'storyName':storyName, 'storyDescription':storyDescription,'image':image,'mainPageDate':mainPageDate};
  dataBase.push(obj)
  this.props.cardId()
  
 
 
 this.setState({
  storyDescription:"",
  storyName:"",
  image:"../logo192.png",
  mainPageDate:document.getElementById("datePicker").getAttribute("value"),
  startDate: new Date(),

 })   
 
}



  
  render(){
    const style = {
      maxHeight:'150px',
      minHeight:'150px',
      minWidth:'70vh',
        resize:'none',
        padding:'15px',
        boxSizing:'border-box',
        fontSize:'15px'};
    return (
      <div className="form">
        <div id="nameStoryDiv">
        <p>Name your story:</p>
      <input onChange={this.handleChangeArea} 
             label="Outlined" 
             variant="outlined" 
             id="nameStory"
             value={this.state.storyName}/>
        </div>
        
       
          <div id="filePick">
          <label id="filePickerLabel" htmlFor="filePicker" style={{ fontWeight:'100',fontSize:'20px',borderRadius:"5px",background:"grey",color:'white', padding:"5px 10px" }}>
              click here to choose a photo 
          </label>
          <input id="filePicker" onChange={this.onImageChange} style={{visibility:"hidden"}} type={"file"}/>
          </div>

    
        <div id="dateAndButton">
        <p>Date:</p>
        <div id="buttonDate">
          <DatePicker
            style={divStyle}
            selected={this.state.startDate}
            onChange={this.handleChangeDate}
            dateFormat="MM/dd/yyyy"
            id="datePicker"
            onCalendarClose={this.onCalendarClose}
            disabled={this.state.noDate}
            />
            <Button id="dateButton" 
            onClick={this.noDate} 
            variant="contained" 
            color="primary" >no date</Button>

          </div>
        </div>
    
        <Button  className="addStoryButton" 
                 variant="contained" 
                 color="primary" 
                 onClick={this.addItem}>add story</Button>

      
          
      <div id="textAreaDiv">
        <p>what happend?</p>
        <textarea className="textArea" 
           style={style} value={this.state.storyDescription} 
           onChange={this.handleChange}
           maxLength="400"
           placeholder="400 characters max"/>
      </div>
     
      <div className="backToMain">
          <Link className="backToMainButton" to='/MainPage'>
          <Button id="backToMainButtonB" variant="contained" color="secondary" >go back</Button>
         </Link>
      </div>

        
      
      </div>
    )
  }
}


export default CreateExp