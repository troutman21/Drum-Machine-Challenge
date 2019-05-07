# Getting started
## Node:
[Node](https://nodejs.org/en/about/) and [NPM](https://docs.npmjs.com/about-npm/) are two tools that we will need to run our Javascript application. You can download them both [here](https://nodejs.org/en/download/). You can check to see if you already have Node downloaded on your machine by typing into the terminal or command prompt `node -v`. If this command returns a version number you are all set!

## Text editor:
To get the most out of your time on this project you or your pair programming partner should work in some sort of text editor. There are a ton of good options out there, but all the cool kids use [Visual Studio Code](https://code.visualstudio.com/download) 😉.

## Getting the code/application on your computer:
* If you are familiar with Git, feel free to clone this repository to your machine like normal.
* If you are not familiar with Git (totally understandable), follow the steps below.
  1. Click on the green "Clone or Download" drop down menu in the upper right hand corner.
  2. Click the "Download Zip" button.
  3. Unzip that file and open it up in your favorite text editor.

* Next, navigate to the location of your unzipped file in your terminal/command prompt using the `cd` command.
* Then run the following commands
  * ### `npm install`
  * ### `npm start`

# Challenges

### Your overall goal is to create sixteen `<Button/>` components that all play cool sounds when click on them.

### To get started with the challenge open up app.js inside src/components/app.js — Good Luck! 🥁🎷🎹🎶🥁🎷🎹🎶🥁🎷🎹🎶🥁🎷🎹🎶🥁🎷🎹🎶🥁🎷🎹🎶


## CHALLENGE 1:
  * Once you run `npm install` and `npm start` your internet browser window should pop up and you should see a gray background (If you don't see this please let me know). Familiarize yourself with the code inside the "app.js" file. We have two components in here: `App` and `Button`. Look at each of those and think about how we'll need those to interact.

## CHALLENGE 2:
  * Now let’s see how all this existing code is working together. First let’s make our `App` component return one `<Button/>` component. You should see a button appear on the internet browser screen!
  * Take another look at the `Button` component. What is being returned from here?
  * Let's get crazy and add a few more button components to the return statement just to see what happens! ... Ok don't get too crazy. Let’s remove those so we can create them in a more efficient manner.

## CHALLENGE 3:
  * Ok let's get a little fancy here and render an array of `<Button/>` components.
  * Notice that we have imported a "Sounds" object just below the challenges. That is an object full of Audio objects that can be played. Don't believe me?! Go ahead and log it to the console. By the time we are finished we will be able to play each of those sounds when we click a specific button, but first we need to create a `<Button/>` for each one of these sound objects.
  * We have created an array of sound names in our `App` component's state. Iterate over that array and create a `<Button/>` component for each one (Is this beginning to look familiar yet❓ hmm...). If you have done it correctly, you should see 16 blank buttons on your screen.

  * Ok these buttons look pretty boring. Let’s give them some text. Let's add a JSX attribute called "sound" to all the buttons when they are being created. Let’s make the value of the sound attribute be the values of the names in the "sounds" array that live in state. If you have done it correctly you should now see text in each of the buttons! But wait, how? Take a look in the `Button` component to see how it is rendering that data. BOOM! "props" OBJECT FOR THE WIN!

## CHALLENGE 4:
  * Well our buttons look a little cooler now with some text in them, but they are pretty lazy. Just look at ‘em sitting there not doing anything. Let’s add some functionality to them, shall we?
  * We have already defined a "playSound" method on the App component. Let's pass that functionality down to our `<Button/>` component so when they are clicked they run that method. When we are creating our buttons in the App component lets add another JSX attribute named "playSound" and make the value of it our "playSound" method. Be sure to look up [documentation](https://reactjs.org/docs/faq-functions.html) if you don't know how to pass that method around. Let's add a simple console log inside our playSound method to make sure it’s working properly. If everything is set up the right way we should be seeing a console log in the dev tools of our browser when we click a button.

## CHALLENGE 5:
  * When we click our buttons, we want them to play a sound that corresponds to the button. Now things are going to get a little more complex.
  * Notice that when our "playSound" method gets called we automatically get passed an event object. This event object holds a bunch of data about the specific event that was fired (including the id of the item that was clicked). Go ahead and log that eventObj to the console to see what’s going on in there.
  * Let’s add an id attribute to the div being returned from the `Button` component and give it the value of `this.props.sound` (we already passed this data in earlier when we were adding text to the buttons). Now, we should be able to access that id on our event object when our "playSound" method is invoked. Try placing a console log inside the "playSound" method to console log `eventObj.currentTarget.id`. If everything is set up the right way, when you click a button you should see its id logged in our console.

## CHALLENGE 6:
  * Ok, lets really put these buttons to work. Now that we have the id of our buttons (which, if you remember, is really just the property name for the Audio objects we imported). Now it’s time to play that audio.
  * Take a look at the Audio API docs [here](https://www.w3schools.com/jsref/dom_obj_audio.asp)
  Inside the "playSounds" method lets console log the "Sounds" object one more time. Now, using the id that we have retrieved from the event object let's select the Audio object stored in the Sounds object and run the play method on it. If everything is set up correctly you should now here a sound when you click on a button.
  * Just to make our drum machine run a little smoother let’s add one more line of code that will reset the audio to play from the start if we click a button really fast. Take a look at the "currentTime" property on the Audio object. I think it might be in the documentation listed above... hmm.

## SUPER HARD BONUS CHALLENGE!!!!:
  * Get rid of that annoying warning message that keep popping up about adding a unique "key" attribute to the array being rendered from our `App` component. [Documentation](https://reactjs.org/docs/lists-and-keys.html) anyone? 😄
