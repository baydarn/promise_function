    function addTwo(number){
      return new Promise((resolve,reject) =>{
        setTimeout(function(){
          if(typeof number === "number"){
            resolve(number + 2);
          }
          else{
            reject(new Error("lütfen bir sayı girin "));
          }
        },3000);
      });
    }
    addTwo(10)
    .then(response =>{
      console.log(response);
      return response + 2;
    }).then(response2 => console.log(response2))
    .catch(err => console.error(err));
    // 1 tane catch - birden çok then kullanabiliriz - Promise Chain
//return ler ile thenleri bağlayarak promise chain yapabiliriz.

