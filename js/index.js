let calculatebtn=document.getElementById('calculate').addEventListener('click' ,function(){
  let income=parseFloat(document.getElementById('income').value);
  let software=parseFloat(document.getElementById('software').value) ;
  let courses=parseFloat(document.getElementById('courses').value) ;
  let internet=parseFloat(document.getElementById('internet').value) ;

  let calculate = software +courses+internet ;
  let totalExpenses=document.getElementById('total-expenses').innerHTML=calculate ;
  let newBalance = income - calculate ;
  let balance=document.getElementById('balance').innerText=newBalance

  
     //  Results Summary
     document.getElementById('results').classList.remove('hidden')

})  ;


document.getElementById('calculate-savings').addEventListener('click', function(){
     let savings= parseFloat(document.getElementById('savings').value) ;
    
     let income=parseFloat(document.getElementById('income').value);
     let software=parseFloat(document.getElementById('software').value) ;
     let courses=parseFloat(document.getElementById('courses').value) ;
     let internet=parseFloat(document.getElementById('internet').value) ;
   
     let calculate = software +courses+internet ;
     let totalExpenses=document.getElementById('total-expenses').innerHTML=calculate ;
     let newBalance = income - calculate ;
     let balance=document.getElementById('balance').innerText=newBalance
     



     const savingpars=(balance*savings)/100 ;
     document.getElementById('savings-amount').innerText=savingpars ;

     let remainingBalance=balance-savingpars ;
     document.getElementById('remaining-balance').innerText=remainingBalance ;

    //  Results Summary
    document.getElementById('results').classList.remove('hidden')
    

})