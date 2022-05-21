function getData(url){
    fetch(url)
    .then(function(res){ return res.text(); })
    .then(function(data){ 
        const advice = JSON.parse(data);
        document.getElementById("number").innerText = `#${advice.slip.id}`;
        document.getElementById("advice").innerText = `" ${advice.slip.advice} "` ;
        console.log(advice.slip.id, advice.slip.advice)
     });
}
document.getElementById('newAdvice').addEventListener('click',function(){
getData('https://api.adviceslip.com/advice');

})