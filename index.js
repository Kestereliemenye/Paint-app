function createBox(){
    
    let box =  document.createElement('input');
    box.setAttribute('type', 'checkbox');
    box.style.marginBottom = "0px";
    box.style.marginTop = "0px";
    box.style.width = "10px";
    box.style.height = "10px";
    box.style.padding = "0px";
    box.style.boxSizing = "border-box";
    const papa = document.querySelector('.body')
    papa.appendChild(box);
    
    const colors = document.querySelectorAll(".colors")
    colors.forEach((cc)=>{

        cc.addEventListener("click", doThis)
        function  doThis() {
                 box.addEventListener('mouseover', function(){
                     box.setAttribute("checked", true)
                     box.style.accentColor = cc.value
                     console.log(cc.value)
                 })
                
         }
    })

    const drawbtn = document.querySelector(".drawbtn")
     drawbtn.addEventListener("click", function(){
         box.addEventListener("mouseover", function() {
             box.setAttribute("checked", true)
}
// function draw (val) {
//         });
)});

const erasebtn = document.querySelector(".Erasebtn")
erasebtn.addEventListener("click", function(){
    box.addEventListener("mouseover", function() {
    box.removeAttribute('checked', true)
})});
    const deletbtn = document.querySelector(".deletebtn")
    deletbtn.addEventListener("click", function(){
        box.removeAttribute('checked', true);
    });
}
   

       
        
   
    //  colors.forEach((color)=> {
    //     color.addEventListener("click", ()=> {
    //         draw(color.value)
    //         initColor = color.value
    //         box.style.accentColor = initColor
    //     })
    // })   
    

    



    


// let delBtn = document.createElement('button');
// delBtn.textContent = 'Delete';
// function delBox(){
    
// }

for(i = 0; i < 4000; i++){
    
   createBox();
  
}
function erase(){

}

