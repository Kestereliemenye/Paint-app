function createBox(){
    
    //created the input
    let box =  document.createElement('input');
    //gave it the checkbox attribute
    box.setAttribute('type', 'checkbox');
    box.style.marginBottom = "0px";//styled it
    box.style.marginTop = "0px";
    box.style.width = "10px";
    box.style.height = "10px";
    box.style.padding = "0px";
    box.style.boxSizing = "border-box";
    const papa = document.querySelector('.body')
    papa.appendChild(box);

    // stored all the colors in a variable
    const colors = document.querySelectorAll(".colors")
    colors.forEach((cc)=>{
// this function changes the color of the checkbox after a click
        cc.addEventListener("click", doThis)
        function  doThis() {
                 box.addEventListener('mouseover', function(){
                     box.setAttribute("checked", true)
                     box.style.accentColor = cc.value
                     console.log(cc.value)
                 })
                
         }
    })
// to activate the draw button 
    const drawbtn = document.querySelector(".drawbtn")
     drawbtn.addEventListener("click", function(){
         box.addEventListener("mouseover", function() {
             box.setAttribute("checked", true)
}
// function draw (val) {
//         });
)});
/// to activate the eraser button
const erasebtn = document.querySelector(".Erasebtn")
erasebtn.addEventListener("click", function(){
    box.addEventListener("mouseover", function() {
    box.removeAttribute('checked', true)
})});
// to activate the delete button
    const deletbtn = document.querySelector(".deletebtn")
    deletbtn.addEventListener("click", function(){
        box.removeAttribute('checked', true);
    });
}
   

       
        
   


for(i = 0; i < 4000; i++){
    
   createBox();
  
}
function erase(){

}

