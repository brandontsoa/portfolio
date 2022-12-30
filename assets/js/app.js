let anime = document.querySelector('.anime');
let body = document.querySelector('body');
let menu =document.querySelector('.menu');

anime.addEventListener('click',function(){
    body.classList.toggle('open');
    
})
menu.addEventListener('click',function(){
    body.classList.remove('open');
    anime.classList.remove('active')
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show'); 
        //}else{ 
           //    entry.target.classList.remove('show'); 
            
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show1'); 
        //}else{ 
           //    entry.target.classList.remove('show'); 
            
        }
    })
});
const hiddenTop = document.querySelectorAll('.hiddentop');
hiddenTop.forEach((el)=> observer1.observe(el))

const observertxt = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showtxt'); 
        //}else{ 
           //    entry.target.classList.remove('show'); 
            
        }
    })
});
const hiddentxt = document.querySelectorAll('.hiddentxt');
hiddentxt.forEach((el)=> observertxt.observe(el))