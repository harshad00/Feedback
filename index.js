const values = document.querySelectorAll(".value");
const btn = document.getElementById("btn");
const container = document.getElementById("container");

let selectedRating = "";


values.forEach((value)=>{
    value.addEventListener("click",(event)=>{
          removeActive();
        //console.log(event.target.innerText || event.target.parentNode.innerText ); 
          selectedRating = event.target.innerText || event.target.parentNode.innerText;
          console.log(selectedRating);
          event.target.parentNode.classList.add("active");
    });  
});

//  when button cleck create a new HTML.
btn.addEventListener("click",()=>{

    if(selectedRating !== ""){
        container.innerHTML = `
      <h1 class="titel"> Thank you!</h1>
  
      <h1>Feedback : ${selectedRating}</h1>

      <b> We'll use your feedback to improve our customer support.</b>  

    `;
    }

})
//   function for remove class from value class. 
function removeActive(){
    values.forEach((value)=>{
     value.classList.remove("active");
    });
}