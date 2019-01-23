/*
CHALLENGES:

CHALLENGE 0:
  Once you npm start you should see a gray background. Familiarize yourself with the code inside the "components" directory. We have two components. An app.js file and a button.js file. Look at each of those and think about how we'll need those to interact.

CHALENGE 1:
  - Now let’s see how all this existing code is working together. First let’s make our App component return one Button component (note: we have access to the Button component because we are importing it at the top of the file). You should see a button appear on the screen! Take another look at the button.js file to see what is being returned from this component. Let's get crazy and add a few more button components to the return statement just to see what happens! ... Ok don't get too crazy. Let’s remove those so we can create them in more efficient manner.

CHALLENGE 2:
  - Ok let's get a little fancy here and render an array of Button components.
  - Notice that we have imported a "Sounds" object at just below. That is an object full of Audio objects that can be played. Don't believe me?! Go ahead and log it to the console. By the time we are finished we will be able to play each of those sounds when we click a specific button, but first we need to create a button for each one of these sound objects.
  - We have created an array of sound names in our App components state. Iterate over that array and create a Button component for each one (Is this beginning to look familiar yet? hmmm...). If you have done it correctly, you should see 16 blank buttons on your screen.

  - Ok these buttons look pretty boring. Let’s give them some text. Let's add an attribute called "sound" to all the buttons when they are being created. Let’s make the value of the sound attribute be the values of the names in the "sounds" array that live in state. If you have done it correctly you should now see text in each of the buttons! But wait, how? Take a look in the button.js file, where we defined out Button component to see how it is rendering that data. BOOM! "props" OBJECT FOR THE WIN!

CHALLENGE 3:
  - Well our buttons look a little cooler now with some text in them, but they are pretty lazy. Just look at ‘em sitting there not doing anything. Let’s add some functionality to them, shall we?
  - We have already defined a "playSound" method on the App component. Let's pass that functionality down to our Button Component so when they are clicked they run that method. When we are creating out Buttons in the App Component lets add another attribute named "playSound" and make the value of it our "playSound" method. Be sure to look up documentation if you don't know how to pass that method around. Let's add a simple console log inside our playSound method to make sure it’s working properly. If everything is set up the right way we should be seeing a console log in our dev tools when we click a button.

CHALLENGE 4:
  - When we click our buttons, we want them to play a sound that corresponds to the button. Now things are going to get a little more complex.
  - Notice that when our "playSound" method gets called we automatically get passed an event object. This event object holds a bunch of data about the specific event that was fired (including the id of the item that was clicked). Go ahead and log that eventObj to the console to see what’s going on in there.
  - Let’s add an id attribute to the div being returned from the button component and give it the value of "this.props.sound" (we already passed this data in earlier when we were adding text to the buttons). Now, we should be able to access that id on our event object when our "playSound" method is invoked. Try placing a console log inside the "playSound" method to console log eventObj.currentTarget.id. If everything is set up the right way, when you click a button you should see its id logged in our console.

CHALLENGE 5:
  - Ok, lets really put these buttons to work. Now that we have the id of our buttons (which, if you remember, is really just the property name for the Audio objects we imported). Now it’s time to play that audio.
  - Take a look at the Audio API docs here: https://www.w3schools.com/jsref/dom_obj_audio.asp
  Inside the "playSounds" method lets console log the "Sounds" object one more time. Now, using the id that we have retrieved from the event object lets select the Audio object stored in the Sounds object and run the play method on it. If everything is set up correctly you should now here a sound when you click on a button.
  - Just to make our drum machine run a little smoother let’s add one more line of code that will reset the audio to play from the start if we click a button really fast. Take a look at the "currentTime" property on the Audio object. I think it might be in the documentation listed above... hmmmm.

SUPER HARD BONUS CHALLENGE!!!!:
  - get rid of that annoying warning message that keep popping up about adding a unique "key" attribute to the array being rendered from our App component =)

*/

import React,   { Component } from 'react';
import Button from './button.js';
import Sounds from '../assets/sounds.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sounds: Object.keys(Sounds)
    }
    this.playSound = this.playSound.bind(this);
  }

  playSound(eventObj) {
    //code to be run when click event is fired goes below this line!

  }

  render(){

    return (
      <div className='button-container'>
      {/* Components that need to be returned from App go below here ! */}
      </div>
    );
  }
}

export default App;
