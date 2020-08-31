var boxanime= anime({
    targets:document.querySelectorAll('.box'),
    loop:true,
    translateY:['35rem','48rem'],
    opacity:{
        value:[0,1,0],
        direction:'alternate'
    },
  //  direction:'alternate',
   
    translateX:function(el,i) {
        if(i===0){
            return ['22.5rem','22.5rem']
        }
        if(i===1){
            return ['32.3rem','32.3rem']
        }
    },
    delay:function(el,i){
        if(i===1){
            return 200
        }
        return 400
    }
})
var boxanime2= anime({
    targets:document.querySelectorAll('.box2'),
   loop:true,
    translateY:['-6rem','10rem'],
    opacity:{
        value:[0,1,0],
        direction:'alternate'
    },
  //  direction:'alternate',
   
    translateX:function(el,i) {
        if(i===0){
            return ['10.5rem','10.5rem']
        }
        if(i===1){
            return ['22.5rem','22.5rem']
        }
    },
    delay:function(el,i){
        if(i===1){
            return 600
        }
        return 800
    },
    ' easing': 'cubicBezier(.45,1.03,.7,.61)',
})
boxanime.pause()
boxanime2.pause()
var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 650,
    complete:function(){
        console.log("completed")
        boxanime.play()
        boxanime2.play()
    }
})

tl.add({
    targets:document.querySelectorAll('#bar'),
    translateX:function(el,i){
        if(i===0){
            return ['-33.33vw','18']
        }
       
    },
    translateY:['30rem','30rem'],
    ' easing': 'cubicBezier(.45,1.03,.7,.61)',
    delay:500,
    
    duration:1000
})
anime({
    targets:document.querySelectorAll('#bar2'),
    translateX:function(el,i){
        if(i===0){
            return ['-35rem','42.4rem']
        }
       
    },
   
    ' easing': 'cubicBezier(.45,1.03,.7,.61)',
    delay:1400,
    
    duration:700

})
anime({
    targets:document.querySelectorAll('#bar3'),
    translateX:function(el,i){
        if(i===0){
            return ['-35rem','45.4rem']
        }
       
    },
   translateY:['-7.3rem','-7.3rem'],
    easing: 'easeOutExpo',
    delay:1400,
    
    duration:7300

})
anime({
    targets:document.querySelectorAll('.first'),
    translateX:function(el,i){
        if(i===0){
            return '-40rem'
        }
       
    },
 //  translateY:[-73,-73],
    easing: 'easeOutExpo',
    delay:4400,
    
    duration:2300

})

anime({
    targets:document.querySelectorAll('.second'),
    translateX:function(el,i){
        if(i===0){
            return '-40rem'
        }
       
    },
 //  translateY:[-73,-73],
    easing: 'easeOutExpo',
    delay:4400,
    complete:function(){
        third.play()
    },
    duration:2300

})
const boxm=anime({
    targets:document.querySelectorAll('#boxm1'),
    keyframes: [
        {translateX: '+=37.2rem'},
      
        {translateY: '-50rem'},
        {translateX: '+=10.2rem'},
      ],
 //  translateY:[-73,-73],
     ' easing': 'cubicBezier(.45,1.03,.7,.61)',
    loop:true,
    opacity:[0,1,0],
    duration:1000

})
const boxm2=anime({
    targets:document.querySelectorAll('#boxm2'),
    opacity:[0,1,0],
    keyframes: [
        {translateX: '+=50rem'},
      
        {translateY: '-50rem'},
        {translateX: '+=10.2rem'},
        
      ],
      loop:true,
 //  translateY:[-73,-73],
    easing: 'cubicBezier(.45,1.03,.7,.61)',
    
    
    duration:1000

})
boxm.pause()
boxm2.pause()
const third = anime({
    targets:document.querySelectorAll('.cont'),
    opacity:[0,1],
 //  translateY:[-73,-73],
    
    complete:function(){boxm.play();boxm2.play();barh.play()},
    delay:200
    


})
const barh= anime({
    targets:document.querySelectorAll('#barh'),
    scaleX:[0,15],
    easing: 'easeInExpo',
    duration:1000,
    loop:true,
    complete:function(){
        bb.play()
    }
})
const bb = anime({
    targets:document.querySelectorAll('.bb'),
    opacity:[0,1],
    duration:700,
    easing: 'easeInExpo',
    complete:function(){
        bb2.play()
    }
})
const bb2 = anime({
    targets:document.querySelectorAll('.bb2'),
    opacity:[0,1],
    translateX:['22vw',0],
    duration:700,
    delay:500,
    easing: 'easeInExpo',
})
anime({
    targets:document.querySelectorAll('#wheel'),
    rotateZ:'180deg',
    loop:true,
    easing:'linear'
})
bb2.pause()
bb.pause()
barh.pause()
third.pause()