var hidden=document.querySelectorAll(".contaner >div span:nth-child(1)");
var cards=document.querySelectorAll(".contaner >div");
var time=document.querySelector(".tool span:nth-child(1)");
var flip=document.querySelector(".tool span:nth-child(2)");
var reload=document.querySelector(".tool span:nth-child(3)");
var term=0;
var arry=[];
var win=1;
var flip_count=0;
var time_count=20;
window.addEventListener("load",()=>{
// console.log(1+"a");
var items_arry=["A","B","C","D","E","F","G","H"];


var ch1=Math.round(Math.random()*7);
var ch2=Math.round(Math.random()*7);
var ch3=Math.round(Math.random()*7);
var ch4=Math.round(Math.random()*7);
var ch5=Math.round(Math.random()*7);
var ch6=Math.round(Math.random()*7);
var ch7=Math.round(Math.random()*7);
var ch8=Math.round(Math.random()*7);
console.log(ch1,ch2,ch3,ch4,ch5,ch6,ch7,ch8)

hidden[0].innerHTML =items_arry[ch2];
hidden[1].innerHTML =items_arry[ch4];
hidden[2].innerHTML =items_arry[ch6];
hidden[3].innerHTML =items_arry[ch3];
hidden[4].innerHTML =items_arry[ch1];
hidden[5].innerHTML =items_arry[ch5];
hidden[6].innerHTML =items_arry[ch3];
hidden[7].innerHTML =items_arry[ch8];
hidden[8].innerHTML =items_arry[ch7];
hidden[9].innerHTML =items_arry[ch1];
hidden[10].innerHTML=items_arry[ch4];
hidden[11].innerHTML=items_arry[ch6];
hidden[12].innerHTML=items_arry[ch5];
hidden[13].innerHTML=items_arry[ch2];
hidden[14].innerHTML=items_arry[ch8];
hidden[15].innerHTML=items_arry[ch7];
})
// console.log(cards)
// debugger
cards.forEach(e => {
    e.addEventListener("click", all)});
    function all(){
        abc(this);
        // console.log(this)
    
    }
 

	function abc(e){
	     if (flip_count==0) {
		   let ss=setInterval(() => {
		            time.innerHTML=` time:${--time_count}s`;
		            if (time_count == 0) {
		           cards.forEach((e)=>e.removeEventListener("click",all));

		                clearInterval(ss);
		    
		            }
		            
		        },1000);
	}
	
	        e.classList.add("show");
	        if(term==1){ //call function when 2nd card display
	            setTimeout(checkcard,900) //use for delay
	         term=0;
	        }else{
	            term++;
	          };
	          flip.innerHTML=`flip: ${++flip_count}`;
	     
	        arry.push(e)
	        // this will remove event when once card is opened
	
}

    

function checkcard(){
    if (arry[0].firstChild.innerHTML != arry[1].firstChild.innerHTML) {
        arry[1].classList.remove("show");
        arry[0].classList.remove("show");
        arry.splice(0,2,)
    //   console.log(arry)
    

        
    }else{
        arry.splice(0,2,)
        win++;
   

    }
    if (win==9) {
        let a=confirm("you win reload the page to play the game");
        if (a) {
            window.location.reload();
        }
    }


}

//thi is use to reloa the page
reload.addEventListener("click",()=>{
    window.location.reload();
});