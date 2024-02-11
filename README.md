# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](images\screenshot.png)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Advice Slip API](https://api.adviceslip.com/)
- Flexbox
- Mobile-first workflow




### What I learned
This was a great project for me to exercise my skills at working with API!


Some of my code!

```js
 document.querySelector('button').addEventListener('click', getFetch)

window.onload = () => {


    getFetch();
}


    function getFetch(){
        let url = `https://api.adviceslip.com/advice`
        

        fetch(url , {cache: "no-cache"})
      
        .then(res => res.json()) // parse response as JSON
        
      .then(advice=> {
             adviceObj = advice.slip;
        console.log(advice.slip)
        document.querySelector('h1').innerText = `  Advice #${adviceObj.id}`
        document.querySelector('p').innerHTML = `<span class="LQ">“</span> ${adviceObj.advice}<span class="RQ">”</span> `;
    }  )
       
      
        .catch(err => {
            console.log(`error ${err}`)
        });
  
          
   }

```




## Author

- Website - [Jei James](https://jeijames.netlify.app/)
- Frontend Mentor - [@carrot10pumpkin](https://www.frontendmentor.io/profile/carrot10pumpkin)



