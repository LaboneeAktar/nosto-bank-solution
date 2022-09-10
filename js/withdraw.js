/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  // console.log(newWithdrawAmount);

  if (isNaN(newWithdrawAmount)) {
    alert('Please Enter a Number');
    return;
  }
  else if (newWithdrawAmount < 0) {
    alert('Please Enter a Positive Number');
    return;
  }

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  // console.log(previousWithdrawTotal);

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  // console.log(newWithdrawTotal);
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  if (newWithdrawAmount > newBalanceTotal) {
    alert("You don't have Sufficient Money");
    return;
  }
  setTextElementValueById("balance-total", newBalanceTotal);
});
