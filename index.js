let box=document.querySelectorAll(".box");
let body=document.querySelector("body");
box.forEach(function(box){
      console.log(box);
      box.addEventListener('click',function(b){
            console.log(b)
            console.dir(b.target);
            if(b.target.id==='brown'){
                  body.style.backgroundColor=b.target.id;
            }
            if(b.target.id==='aqua'){
                  body.style.backgroundColor=b.target.id;
            }
            if(b.target.id==='grey'){
                  body.style.backgroundColor=b.target.id;
            }
            if(b.target.id==='blue'){
                  body.style.backgroundColor=b.target.id;
            }
      })
})