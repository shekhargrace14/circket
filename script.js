const header = document.getElementById("header")

header.addEventListener("scroll",(e)=>{
    if(header.scroll > "1px"){
        header.style.backgroundColor = "red"
    }
})

// eventUpdate starts here 

let events = document.getElementById("events");

fetch("./event.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((e) => {
      events.insertAdjacentHTML("beforeend", `
        <div class="column">
                    <img src="${e.teamAlogo}" alt="">
                    <div class="details">
                        <p>${e.date} </p>
                        <p class="score">${e.teamAscore}-${e.teamBscore}</p>
                        <p>${e.league}</p>
                        <p>${e.venue} </p>
                    </div>
                    <img src="${e.teamBlogo}" alt="">

                 
                </div>
        `)
    })
} )
.catch((error) => console.error("Error fetching data:", error));


// eventUpdate ends here 
// blog  starts here 

let blog  = document.getElementById("blog");

fetch("./blog.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((e) => {
        blog.insertAdjacentHTML("beforeend", `
        <div class="column">
        <div class="details">
        <img src="${e.image}" alt="">
        <h3>${e.title} </h3>
        <p>${e.title}</p>
        <p>${e.venue} </p>
        </div>
        
        
        </div>
        `)
    })
} )
.catch((error) => console.error("Error fetching data:", error));


// blog ends here 
