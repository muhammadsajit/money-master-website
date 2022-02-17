
//handle calculate event handler

document.getElementById('calculate-button').addEventListener('click',function(){
    //get income field
     const incomeField=document.getElementById('income-input');
     const newIncomeValueText=incomeField.value;
     const newIncomeValue=parseFloat(newIncomeValueText);
     



     //get food field
     const foodField=document.getElementById('food-input');
    const newFoodValueText=foodField.value;
    const newFoodValue=parseFloat(newFoodValueText);
       //get rent field
    const rentField=document.getElementById('rent-input');
    const newRentValueText=rentField.value;
    const newRentValue=parseFloat(newRentValueText);
     //get cloth field
     const clothesField=document.getElementById('cloth-input');
    const newClothesValueText=clothesField.value;
      const newClothesValue=parseFloat(newClothesValueText);
      if( typeof incomeField !='number'||typeof foodField !='number'||typeof foodField !='number'||typeof clothesField !='number'){
      
         alert('this is not a number');
      }
    

      

   
     //total expense calculate
      const totalExpense=document.getElementById('total-expense');
      const previousExpenseText= totalExpense.innerText;
      const previousExpense=parseFloat(previousExpenseText);
     const newExpense=previousExpense+newFoodValue+newRentValue+newClothesValue;
    totalExpense.innerText=newExpense;
    if(newExpense>newIncomeValue){
       alert('error');
    }
       //balance calculate
       const balance=document.getElementById('balance');
            // const previousBalanceText= balance.innerText;
            // const previousBalance=parseFloat(previousBalanceText);
             const newBalance=newIncomeValue-newExpense;
             balance.innerText=newBalance;
    //clear income Field
    //   incomeField.value='';
    //clear food field
    foodField.value='';
     //clear rent Field
     rentField.value='';
        //clear cloth Field
        clothesField.value='';
    




});
//handle save event handler
document.getElementById('save-button').addEventListener('click',function(){
     //get income field
     const incomeField=document.getElementById('income-input');
    const newIncomeValueText=incomeField.value;
     const newIncomeValue=parseFloat(newIncomeValueText);
    
    //get save field
    const saveField=document.getElementById('save-input');
       
      const newSaveValueText=saveField.value;
     const newSaveValue=parseFloat(newSaveValueText);
    
    //  //calculate savings
       const savings=document.getElementById('savings');
      const previousSavingsText= savings.innerText;
    
      
     const newSavings=(newIncomeValue/100)*newSaveValue;
     savings.innerText= newSavings;
     
     
     //total expense calculate
     const totalExpense=document.getElementById('total-expense');
     const previousExpenseText= totalExpense.innerText;
     const previousExpense=parseFloat(previousExpenseText);
    const newExpense=previousExpense+newFoodValue+newRentValue+newClothesValue;
   totalExpense.innerText=newExpense;

      //get balance
     const balance=document.getElementById('balance');
              const previousBalanceText= balance.innerText;
           const previousBalance=parseFloat(previousBalanceText);
          const newBalance=newIncomeValue-newExpense;
          balance.innerText=newBalance;
    
          
    //remaining balance calculate

    const remainingBalance=document.getElementById('remain-balance');
     const remainingBalanceText=remainingBalance.innerText;
     

     const previousRemainingBalance=parseFloat(remainingBalanceText);
    

   
      
            
     const newRemainingBalance=newBalance -newSavings;
     remainingBalance.innerText=newRemainingBalance;
            
           
    
    //  remainingBalance.innerText= newRemainingBalance ;
    //clear save Field
    saveField.value='';

});