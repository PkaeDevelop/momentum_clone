const player ={
  name:"nico",
  sayHello:function(otherPersonName){
    console.log('hello '+otherPersonName+' nice to meet you');
  }
}

console.log(player.name);
player.sayHello("a");
player.sayHello("b");
player.sayHello("c");