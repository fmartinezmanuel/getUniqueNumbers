function compareNum(ar){

  var outoutAr = [];
  for(i=0; i<ar.length; i++){
    var imUnique= 0;
    var notUnique = 0;
    //console.log('First cicle'+ar[i]);
    for(j=0; j<ar.length; j++){

      if( ar[i] == ar[j] ){
        if(imUnique < 1){
          imUnique++;
          console.log('Find myself '+ ar[i]);
        }else{
          console.log('Not unique');
        notUnique = 1;
        console.log('Is i: '+ar[i]+' Is j: '+ar[j]);
        }

      }
    }//second for
    if(notUnique === 0){
      console.log('Push: '+ ar[i]);
      notUnique = 0;
      outoutAr.push(ar[i]);
    }
  }//for ends..
  console.log(outoutAr);
}

compareNum([1,2,3,4,8,2,3]);
