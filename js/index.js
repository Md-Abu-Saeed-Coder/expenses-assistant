// calculate btn
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

// Expense History start
const historyItem=document.createElement('div') ;
historyItem.className='bg-white p-3 rounded-md border-1-2 border-indigo-500' ;

historyItem.innerHTML=`

<p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
<p class="text-xs text-gray-500">Income:$${income}</p>
<p class="text-xs text-gray-500">TotalExpenses:$${totalExpenses}</p>
<p class="text-xs text-gray-500">Balance:$${balance}</p>

`;

const historyContainer=document.getElementById('history-list');

historyContainer.insertBefore(historyItem,historyContainer.firstChild) ;

// Expense History End

});


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
    

}) ;

// historyTab hober Color apply

document.getElementById('history-tab').addEventListener('click',function(){
     
     
})



const assistantTab=document.getElementById('assistant-tab') ;
const historyTab=document.getElementById('history-tab');
      historyTab.addEventListener('click',function(){
     historyTab.classList.add(
          "text-white",
          "bg-gradient-to-r",
          "from-blue-500",
          "to-purple-600"
     ) ;
     historyTab.classList.remove("text-gray-600");

     assistantTab.classList.remove(
          "text-white",
          "bg-gradient-to-r",
          "from-blue-500",
          "to-purple-600"
     );
     assistantTab.classList.add("text-gray-600");

     document.getElementById('expense-form').classList.add('hidden')
    

})
