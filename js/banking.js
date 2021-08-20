//handel deposit button event
document.getElementById('deposite-btn').addEventListener('click',function (){
    //get amount of deposite
    const depositeInput=document.getElementById('deposite-input');
    const newDepositeAmountText=depositeInput.value;
    const newDepositeAmount=parseFloat(newDepositeAmountText);
    // console.log(depositeAmount);
    // update deposite
    const depositeTotal=document.getElementById('deposite-total');
  const previousDepositeText=depositeTotal.innerText;
  const previousDepositeAmount=parseFloat(previousDepositeText);

  const newDepositeTotal=previousDepositeAmount+newDepositeAmount;
    depositeTotal.innerText=newDepositeTotal;

// update balance
const balanceTotal=document.getElementById('balance-total');
  const previousBalanceText=balanceTotal.innerText;
  const previousBalanceAmount=parseFloat(previousBalanceText);

  const newBalanceTotal=previousBalanceAmount+newDepositeAmount;
    balanceTotal.innerText=newBalanceTotal;

    
    //clear input filed
    depositeInput.value='';


}
)
//handel withdraw button event
document.getElementById('withdraw-btn').addEventListener('click',function (){
    //get amount of withdraw
    const withdrawInput=document.getElementById('withdraw-input');
    const newWithdrawAmountText=withdrawInput.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountText);
    // console.log(withdrawAmount);
    // update withdraw
    const withdrawTotal=document.getElementById('withdraw-total');
  const previousWithdrawText=withdrawTotal.innerText;
  const previousWithdrawAmount=parseFloat(previousWithdrawText);

  const newWithdrawTotal=previousWithdrawAmount+newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;

// update balance
const balanceTotal=document.getElementById('balance-total');
  const previousBalanceText=balanceTotal.innerText;
  const previousBalanceAmount=parseFloat(previousBalanceText);

  const newBalanceTotal=previousBalanceAmount-newWithdrawAmount;
    balanceTotal.innerText=newBalanceTotal;

    
    //clear input filed
    withdrawInput.value='';


}
)
// //handel withdraw button event
// document.getElementById('withdraw-btn').addEventListener('click',function (){
//     //get amount of withdraw
//     const withdrawInput=document.getElementById('withdraw-input');
//     const withdrawAmount=withdrawInput.value;
//     console.log(withdrawAmount);
//     const withdrawTotal=document.getElementById('withdraw-total');
//     withdrawTotal.innerText=withdrawAmount;
    
//     //clear input filed
//     withdrawInput.value='';
// }
// )