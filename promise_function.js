
function getData(data){//promise objesi döndüren fonksiyon
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        if(typeof data === "string"){
          resolve(data);
        }
        else{
          reject(new Error("lütfen string bir değer girin"));
        }
      },5000);
    });
  }

  getData(24)
  .then(response =>console.log("gelen değer " + response))
  .catch(err => console.error(err));
  
    

