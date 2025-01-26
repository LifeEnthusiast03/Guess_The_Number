function random(){
    return Math.floor(Math.random()*100+1);
}
let random_number;
const startbtn=document.querySelector('.start');

function removeStart(){
    document.querySelector('.start').style.display='none';
  
}
function removeAgain(){
    document.querySelector('.again').style.display='none';
    document.querySelector('.remarks').innerHTML='No remarks';
    document.querySelector('.inputbox input').value='';
    document.querySelector('.inputbox input').placeholder='Enter your guess';
}

startbtn.addEventListener('click',function(e){
    document.querySelector('.inputbox').style.display='block';
    document.querySelector('.gamebox h3').style.display='block';
    
    removeStart();
    random_number=random();
});
document.querySelector('.again').addEventListener('click',function(e){
    random_number=random();
    removeAgain();
});

/*______________________________`*/




const get_input=document.querySelector('.inputbox input');
const submitbtn=document.querySelector('.submit');
const remaks=document.querySelector('.remarks');
const again=document.querySelector('.again');

function cheakGuess(gueeed_number){
    if(gueeed_number>random_number){
        return 'Too High';
    }
    else if(gueeed_number<random_number){
        return 'Too Low';
    }
    else{
        return 'Correct';
    }

}


submitbtn.addEventListener('click',function(e){
    console.log(random_number);
    
    const remark=cheakGuess(get_input.value);
    get_input.value='';
    if(remaks!="Correct") get_input.placeholder = 'guess again';
    

    remaks.innerHTML=`${remark}`;
    if(remark==='Correct'){
        get_input.value=random_number;
        document.querySelector('.again').style.display='block';
    }

    
})













