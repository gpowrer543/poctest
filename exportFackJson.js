

var fs = require('fs'); 
var dir='C:/Users/Administrator/Desktop/pocfackData';

//取得template


fs.readFile(dir+'/twtemple.txt', {encoding: 'utf-8'}, function(err,template){
    if (!err) {
        console.log('received data: ' + template);
		
	
     
    } else {
        console.log(err);
    }
});
