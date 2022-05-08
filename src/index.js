console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp)=> resp.json())
    .then(data => data.message.forEach(element => {
        const div = document.getElementById("dog-image-container");
        let elem = document.createElement("img")
            elem.setAttribute("src",element)
            div.appendChild(elem)
    }) )

fetch("https://dog.ceo/api/breeds/list/all")
     .then((resp)=> resp.json())
     .then(data => {
         for (const prop in data.message){
                const ul = document.getElementById("dog-breeds");
                let elem = document.createElement("li")
                    //elem.setAttribute("class","breeds")
                 ul.appendChild(elem)
                 elem.innerHTML = prop ;
                 elem.addEventListener("click", (e)=> {
                    e.preventDefault();
                    elem.setAttribute("style", "color:red;")
                })
           }
        }
      ) 
      
   