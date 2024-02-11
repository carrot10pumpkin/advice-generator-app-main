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

 