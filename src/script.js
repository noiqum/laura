gsap.from('.content__pic',{opacity:0,x:-1000,duration:2.5,ease:'power2.easeout'});
gsap.from('.content__name',{opacity:0 ,duration:5,y:-1000,ease:"back.out(1.7)",delay:1.7});
gsap.from('.contact',{opacity:0,x:-200,ease:"power4.easeinout",duration:2,delay:2.5});
gsap.fromTo('header',{y:1000,opacity:0},{opacity:1,y:0,duration:3,ease:"power3.easeinout",delay:3});
gsap.from('.footer__social',{y:-1000,opacity:0,duration:2,ease:'power4.easeinout',delay:2.5});

let contact=document.querySelector('.contact');
contact.addEventListener('click',rota);

function rota(){
    gsap.to('.contact',{rotate:360,duration:5,x:1000,ease:'power2.easeinout'});
    console.log('rota');
}

let products=document.getElementById('products');
let cover=document.querySelector('.cover');
products.addEventListener('click',menu);

function menu(){
    let cls=products.classList.value;
    if(cls==="start"){
        products.classList.add('products-toggle');
        products.classList.remove('start');
        gsap.to('.cover-div-1',{opacity:1,y:0,duration:2,ease:'power2.easeinout'});
        gsap.to('.cover-div-2',{opacity:1,y:0,duration:2,ease:'power2.easeinout',delay:0.5});
        gsap.to('.cover-div-3',{opacity:1,y:0,duration:2,ease:'power2.easeinout',delay:1});
        gsap.to('.cover-div-4',{opacity:1,y:0,duration:2,ease:'power2.easeinout',delay:1.5});
        gsap.from('#cover-img',{opacity:0,duration:2,x:1000,ease:'power2.easeout',delay:2});
        gsap.from('.cover-div-1-span',{opacity:0,duration:2,x:1000,ease:'power2.easeout',delay:2})
        gsap.from('.cover-div-2-span',{opacity:0,duration:2,x:1000,ease:'power2.easeout',delay:2})
        gsap.from('.cover-div-3-span',{opacity:0,duration:2,x:1000,ease:'power2.easeout',delay:2})
        
    }
    else{
        products.classList.remove('products-toggle');
        products.classList.add('start');
        gsap.to('.cover-div-1',{opacity:1,y:1000,duration:2,ease:'power2.easeinout'});
        gsap.to('.cover-div-2',{opacity:1,y:1000,duration:2,ease:'power2.easeinout',delay:0.5});
        gsap.to('.cover-div-3',{opacity:1,y:1000,duration:2,ease:'power2.easeinout',delay:1});
        gsap.to('.cover-div-4',{opacity:1,y:1000,duration:2,ease:'power2.easeinout',delay:1.5});
        
    }
    
}

