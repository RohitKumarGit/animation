var boxanime1= anime({
    targets:document.querySelectorAll('.box'),
    loop:true,
    translateY:['35rem','48rem'],
    opacity:{
        value:[0,1],
        direction:'alternate'
    },
  //  direction:'alternate',
   delay:1500,
    translateX:['22.5rem','22.5rem'],
   'easing':'easeOutExpo',
   
    
})

var boxanime2= anime({
    targets:document.querySelectorAll('.boxs'),
    loop:true,
    translateY:['35rem','48rem'],
    opacity:{
        value:[0,1],
        direction:'alternate'
    },
  //  direction:'alternate',
  'easing':'easeOutExpo',
    translateX:['30.5rem','30.5rem'],
    delay:1000,
    
    
})
var boxanime5= anime({
    targets:document.querySelectorAll('.down1'),
    loop:true,
    translateY:'+=15rem',
    opacity:{
        value:[0,1],
        direction:'alternate'
    },
  //  direction:'alternate',
  'easing':'easeOutExpo',
    translateX:['3rem','3rem'],
    delay:2000,
    
    
})
var boxanime6= anime({
    targets:document.querySelectorAll('.down2'),
    loop:true,
    translateY:'+=15rem',
    opacity:{
        value:[0,1],
        direction:'alternate'
    },
  //  direction:'alternate',
  'easing':'easeOutExpo',
    translateX:['-12rem','-12rem'],
    delay:3000,
    
    
})
var boxanime= anime({
    targets:document.querySelectorAll('.boxm2'),
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
boxanime1.pause()
boxanime5.pause()
boxanime6.pause()
var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 650,
    complete:function(){
        console.log("completed")
        boxanime.play()
        boxanime2.play()
        boxanime1.play()
        boxanime5.play()
        boxanime6.play()
    }
})

tl.add({
    targets:document.querySelectorAll('#bar'),
    translateX:function(el,i){
        if(i===0){
            return ['-33.33vw','26']
        }
       
    },
    translateY:['30rem','30rem'],
    ' easing': 'cubicBezier(.45,1.03,.7,.61)',
    delay:500,
    
    duration:1000
})
anime({
    
        targets:document.querySelectorAll('#barm'),
        translateX:function(el,i){
            if(i===0){
                return ['-33.33vw','26']
            }
           
        },
        translateY:['30rem','30rem'],
        easing: 'easeOutExpo',
        delay:500,
        
        duration:1000
    
})

anime({
    targets:document.querySelectorAll('#bar2'),
    translateX:function(el,i){
        if(i===0){
            return ['-10rem','70']
        }
       
    },
    translateY:['32rem','32rem'],
    ' easing': 'cubicBezier(.45,1.03,.7,.61)',
    delay:1400,
    
    duration:3000

})
anime({
    targets:document.querySelectorAll('#bar3'),
    translateX:function(el,i){
        if(i===0){
            return ['-40rem','37rem']
        }
       
    },
   translateY:['-7.3rem','-7.3rem'],
    easing: 'easeOutExpo',
    delay:1400,
    
    duration:5300

    
})
const mps = anime({
    targets:document.querySelectorAll('.mps'),
    opacity:[0,1,0],
    easing:'easeOutExpo',
    duration:1000,
    translateX:'+=100',
    loop:true,
    delay:400

})
const remove= anime({
    targets:document.querySelectorAll('#bar3'),
    opacity:[1,0],
    duration:300,
    easing:'linear'
})
remove.pause()
//mps.pause()
anime({
    targets:document.querySelectorAll('.first'),
    translateX:function(el,i){
        if(i===0){
            return '-60rem'
        }
       
    },
 //  translateY:[-73,-73],
    easing: 'easeOutExpo',
    delay:4400,
    complete:function(){
        remove.play()
      
    },
    duration:2300,
    enddelay:4000

})

anime({
    targets:document.querySelectorAll('.second'),
    translateX:function(el,i){
        if(i===0){
            return '-60rem'
        }
       
    },
 //  translateY:[-73,-73],
    easing: 'easeOutExpo',
    delay:4400,
    complete:function(){
        third.play()
        bb.play()
    },
    duration:2300

})
const boxm=anime({
    targets:document.querySelectorAll('#boxm1'),
    keyframes: [
        {translateX: '+=50rem'},
      
        {translateY: '-55rem'},
        {translateX: '+=10rem'},
      ],
 //  translateY:[-73,-73],
 ' easing':'easeOutExpo',
    loop:true,
    opacity:[.6,1,.6],
    duration:3000,
    complete:function () {
       
    }

})
const boxm2=anime({
    targets:document.querySelectorAll('#boxm2'),
    opacity:[.6,1,.6],
    keyframes: [
        {translateX: '+=50rem'},
      
        {translateY: '-65rem'},
        {translateX: '+=10rem'},
      ],
      loop:true,
 //  translateY:[-73,-73],
 ' easing': 'easeOutExpo',
    delay:2000,
    
    duration:3000

})
boxm.pause()
boxm2.pause()
const third = anime({
    targets:document.querySelectorAll('.cont'),
    opacity:[0,1],
 //  translateY:[-73,-73],
    
    complete:function(){boxm.play();boxm2.play();barh.play();barhs.play()},
    delay:200
    


})

// translateX(56px - 138) translateY(-31px) rotate(90deg)
const barh= anime({
    targets:document.querySelectorAll('#barh'),
    scaleX:[0,15],
    easing: 'easeInExpo',
    duration:1000,
    loop:true,
    complete:function(){
        console.log("done")
       
    },
   
})
const barhs= anime({
    targets:document.querySelectorAll('.arrow img'),
    translateX:['8.6rem','26.8'],
    translateY:[-21,-21],
    rotate:['90deg','90deg'],
    easing: 'easeInExpo',
    duration:1000,
    loop:true,
    
})
anime.remove(document.querySelectorAll('#barh img'))
const bb = anime({
    targets:document.querySelectorAll('.bb'),
    opacity:[0,1],
    duration:700,
    easing: 'easeInExpo',
    complete:function(){
        console.log("rinning")
        bb2.play()
    },
    delay:3000
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
barhs.pause()
third.pause()