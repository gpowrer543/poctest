
var sql=require('mssql');
var fs = require('fs'); 
var dir='C:/Users/Administrator/Desktop/test';
var TXNID;
var TXNIDL;
var TXNNAME;
//取得template


fs.readFile(dir+'/twtemple.txt', {encoding: 'utf-8'}, function(err,template){
    if (!err) {
        //console.log('received data: ' + template);
		
		
		
		
		
		
		
		//config for your database
/* var config={
 user: 'sa',
    password: 'P@ssw0rd',
    server: '172.16.5.180', 
    database: 'IB',
    port: 1433 
 };*/

 var config={
 user: 'sa',
    password: 'P@ssw0rd',
    server: '172.16.5.203', 
    database: 'IB',
    port: 1433 
 };
 

//connect to your database
 sql.connect(config,function (err) {
   if(err) console.log(err);
 
//create Request object
   var request=new sql.Request();
request.query("SELECT  * FROM [IB].[ESB].[ESBTXN] where  [TXNID] in ('TW2220000','TW2300003','TW9110002')",function(err,recordset){
   if(err) console.log(err);
   
  // console.log(recordset.recordset);
   var list=recordset.recordset;
   

	list.forEach(function (entity, i) { 
		TXNID=entity.TXNID;
		TXNIDL=TXNID.toLowerCase();
		TXNNAME=entity.TXNNAME;
		console.log(TXNID);
		
		
		//template.replace(/$txnidl/g,TXNIDL) ;
		
		try{
			var newData=template.replace(/\$txnid/g,TXNID).replace(/\$lid/g,TXNIDL).replace(/\$txnname/g,TXNNAME);
		
		
		}catch(err)
		{
		    console.log(err);	
		}
		//template.replace(/$txnname/g,TXNNAME) ;
		console.log(newData);
		var data=newData;
		fs.writeFile(dir+'/tws-tw-esb-tw-'+TXNIDL+'.yaml',data,function(error){ //把資料寫入檔案
			if(error){ //如果有錯誤，把訊息顯示並離開程式
				console.log('檔案寫入錯誤');
			}
		});
		
	
	});
 
 //console.log(JSON.stringify(recordset.recordsets))
//send records as a response
  // res.send(recordset);
   });
 });
		
		
		
		
		
		
		
		
		
		
		
		
		
		
     
    } else {
        console.log(err);
    }
});


 

 

 
