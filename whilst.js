  var count = 0;
  var async = require('async');

  async.whilst(
      function() { return count < 5; },
      function(callback) {
          count++;
          setTimeout(function() {
              callback(null, count);
          }, 1000);
      },
      function (err, n) {
          // 5 seconds have passed, n = 5
          console.log(n);
      }
  );


  async.waterfall([
    function a(callback){
      var x = 3+4;
      callback(null,x);
    },
    function b(x, callback){
        setTimeout(function(){
            console.log('function b');
            callback(null,x);
        },1000);
    },
    function(res,callback){
      console.log('res',res);
      callback(null,res);
    }
    ], function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
    }
  })