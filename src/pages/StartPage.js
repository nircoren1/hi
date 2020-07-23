import React from 'react';
import {Link} from 'react-router-dom'
import '../style.css'
import Button from '@material-ui/core/Button';



function StartPage() {
  return (
    <div className="startPage">
      <h1 className="startPageText">Capture Your Story</h1>
      
    <p className="startPageText">The purpose of this app is to connnect funny <br/>
         or interesting stories to your selected photos. </p>
    <h2 >a few points to keep in mind:</h2>
      <ul>
        <li>Don't refresh the app when you use it because i didn't learn databases yet (changes will not be saved). </li>
        <li>you have the option to drag and drop the stories you created.if you wish to discard one of them,<br/>  drag it to the trash icon.</li> 
        <li>there is a bug that happens if you drag the pictures on top of each other, im trying to fix it. </li>
      </ul>
      <Link className="startPageText startButton" to='/MainPage'>
        <Button variant="contained" color="primary" className=" ">Click to start</Button>
      </Link>
    </div>
  );
}

export default StartPage;
