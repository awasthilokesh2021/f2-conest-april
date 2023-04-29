

function getMenu(callback){
  setTimeout(function(){
    const promise = fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
     promise.then(response => response.json()).then(data => {
      for(var x in data){
        document.write(`${data[x].name } <br>`)
     }
     callback()
    })
  })
  
}

// second function

function TakeOrder(callback){
  
  let prime = new Promise((resolve, reject) => {
    setTimeout(function(){
      let food = {
        name: "burger",
        name1: "burger1",
        name2: "burger2",
      }
      document.write(food.name);
      document.write(food.name1);
      document.write(food.name2);
       
       resolve();
       callback()
    },2500)
})
}



function orderPrep(callback){
  let prime = new Promise((resolve, reject) => {
   
    setTimeout(function(){
      let order_status = true;
      let paid = false;
      if(order_status == true || paid < 1000){
        document.write(`"order_status :" ${order_status} , "paid :" ${paid}`);
      }
    
       resolve();
       callback();
    },1500)
  })
} 


function payOrder(callback){
  let pri = new Promise((resolve, reject) => {
   
    setTimeout(function(){
      let order_status = true;
      let paid = true;
      if(order_status == true || paid < 1000){
        document.write(`"order_status :" ${order_status} , "paid :" ${paid}`);
      }
       resolve();
       callback();
    },1000)
})
} 

function thankyouFnc(callback){
  
  alert("thankyou for eating with us today!")
  callback();
}

getMenu(function(){
  TakeOrder(function(){
    orderPrep(function(){
      payOrder(function(){
        thankyouFnc()
      })
    })
  })
})




