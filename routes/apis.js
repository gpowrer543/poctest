var express = require('express');
var router = express.Router();
var fs = require("fs");

var dir = './pocfackData';


/* 使用者登入 */
/*router.post('/user/enroll', function(req, res) {

    //res.json(__dirname);

    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);

    });


});*/




/* 記錄捐款 */
router.post('/chaincode/invoke', function(req, res) {

    //res.json(__dirname);
	
		
	console.log("GGGGGG1");
	
	
	try{
	var reqBody = req.body;
	
	var enrollID=reqBody.user.enrollID;
	
	var invokeRequest=reqBody.invokeRequest;
	
	var fcn=invokeRequest.fcn;
	
	var args=invokeRequest.args;
	
	var chaincodeID=invokeRequest.chaincodeID;
	
	var metadata=invokeRequest.metadata;
	
	var sign=invokeRequest.sign;
	
	var  reqobj=args[0];
	
	
	//console.log(reqBody);
	
	//console.log(enrollID);
	//console.log(invokeRequest);
	//console.log(fcn);
	//console.log(args);
	//console.log(chaincodeID);
	//console.log(metadata);
	//console.log(sign);
	
	
	console.log(reqobj);
	
		
	}catch(err)
	{
		
			console.log(err);
	}
	

	
	
    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';

        var returncode=Math.round(new Date().getTime());
		
        res.end("{\"txID\":{\"result\":"+returncode+"}}");

  

});






router.post('/chaincode/invoke/donate', function(req, res) {

    //res.json(__dirname);
	
		
	console.log("GGGGGG1");
	
	
	try{
	var reqBody = req.body;
	
	var ProjectID=reqBody.ProjectID;
	
	var Amount=reqBody.Amount;
	
	var Channel=reqBody.Channel;
	
	var IDN=reqBody.IDN;
	
	var PayInfo=reqBody.PayInfo;
	
	var Receipt=reqBody.Receipt;
	
		
	}catch(err)
	{
		
			console.log(err);
	}
	

	
	
    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';

        var returncode=Math.round(new Date().getTime());
		
        res.end("{\"txID\":{\"result\":"+returncode+"}}");

  

});




/* 查詢全部專案資料APIM */
router.post('/chaincode/query/listProjects', function(req, res) {

    //res.json(__dirname);
    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';

    fs.readFile(dir + "/" + "listProjects.txt", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);

    });


});

/* 查詢全部專案資料APIM含描述 */
router.post('/chaincode/query/listProjectDesc', function(req, res) {


    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';

    fs.readFile(dir + "/" + "listProjectDesc.txt", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);

    });


});




/* 查詢查詢單筆專案資料APIM */
router.post('/chaincode/query/projectInfo', function(req, res) {


    var reqBody = req.body;
    // console.log(req.body.list);
    var ProjectID = reqBody.ProjectID;
    console.log(ProjectID);
    //res.json(__dirname);
    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';

    fs.readFile(dir + "/" + "listProjects.txt", 'utf8', function(err, data) {


        var projectMap = {};

        try {

            //https://stackoverflow.com/questions/40944167/unexpected-token-in-json-at-position-0-using-json-parse-in-node-with-valid-jso
            var firstChar = data.substring(0, 1);
            var firstCharCode = data.charCodeAt(0);
            if (firstCharCode == 65279) {
                console.log('First character "' + firstChar + '" (character code: ' + firstCharCode + ') is invalid so removing it.');
                data = data.substring(1);
            }


            var parsedJson = JSON.parse(data);

            parsedJson.list.forEach(function(entity, i) {
                projectMap[entity.ProjectID] = entity;

            });
            console.log(projectMap);

            var resData = projectMap[ProjectID];
            //data=data.replace(/(\r\n|\n|\r)/gm,"");


            res.end(JSON.stringify(resData));

        } catch (err) {
            console.log(err);
        }



    });


});

/* 查詢查詢單筆專案資料含描述 */
router.post('/chaincode/query/projectInfoDesc', function(req, res) {


    var reqBody = req.body;
    // console.log(req.body.list);
    var ProjectID = reqBody.ProjectID;
    console.log(ProjectID);
    //res.json(__dirname);
    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';

    fs.readFile(dir + "/" + "listProjectDesc.txt", 'utf8', function(err, data) {


        var projectMap = {};

        try {

            //https://stackoverflow.com/questions/40944167/unexpected-token-in-json-at-position-0-using-json-parse-in-node-with-valid-jso
            var firstChar = data.substring(0, 1);
            var firstCharCode = data.charCodeAt(0);
            if (firstCharCode == 65279) {
                console.log('First character "' + firstChar + '" (character code: ' + firstCharCode + ') is invalid so removing it.');
                data = data.substring(1);
            }


            var parsedJson = JSON.parse(data);

            parsedJson.list.forEach(function(entity, i) {
                projectMap[entity.ProjectID] = entity;

            });
            console.log(projectMap);

            var resData = projectMap[ProjectID];
            //data=data.replace(/(\r\n|\n|\r)/gm,"");


            res.end(JSON.stringify(resData));

        } catch (err) {
            console.log(err);
        }



    });


});




/* 查詢個人捐款資料APIM */
router.post('/chaincode/query/donPersonal', function(req, res) {


    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';

    fs.readFile(dir + "/" + "donPersonal.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);

    });


});


/* 查詢專案捐款資料APIM */
router.post('/chaincode/query/donProject', function(req, res) {


    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';

    fs.readFile(dir + "/" + "donProject.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);

    });


});


/* 查詢專案撥付資料APIM */
router.post('/chaincode/query/appProject', function(req, res) {


    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';

    fs.readFile(dir + "/" + "appProject.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);

    });


});





/* 使用者登入 */
router.post('/user/enroll', function(req, res) {


    var reqBody = req.body;
	
	var enrollID=reqBody.userList[0].enrollID;
	var enrollSecret=reqBody.userList[0].enrollSecret;
	
	
	
    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';

	if((enrollID=='tcb053') && (enrollSecret='123456'))
	{
		  res.end("{\"status\":\"success\"}");
		
	}else{
		   res.status(400);
		   res.end("{\"status\":\"fail!\"}");
		
	}

 

});









/* 查詢財金原始 */
router.post('/chaincode/query/', function(req, res) {

    var reqBody = req.body;
    var fcn = reqBody.queryRequest.fcn;
    var enrollID = reqBody.user.enrollID;
    var chaincodeID = reqBody.queryRequest.chaincodeID;
    var sign = reqBody.queryRequest.sign;
    var metadata = reqBody.queryRequest.metadata;

    console.log(fcn);
    console.log(enrollID);
    console.log(chaincodeID);
    console.log(sign);
    console.log(metadata);




    //res.json(__dirname);
    res.set({
        'Content-Type': 'application/json'
    });
    res.charset = 'utf8';


    switch (fcn) {
        /* 查詢全部專案資料財金原始 */
        case "listProjects":
            fs.readFile(dir + "/" + "listProjectsORG.txt", 'utf8', function(err, data) {
                //console.log( data );
                res.end(data);

            });
            break;
        case "projectInfo":
            
			
		 var args = JSON.parse(reqBody.queryRequest.args[0]);
		 var argsBody =args.body;
		 console.log(argsBody.ProjectID);
		 var ProjectID=argsBody.ProjectID;


		 
	    fs.readFile(dir + "/" + "listProjectsORG.txt", 'utf8', function(err, data) {


        var projectMap = {};

        try {

            //https://stackoverflow.com/questions/40944167/unexpected-token-in-json-at-position-0-using-json-parse-in-node-with-valid-jso
            var firstChar = data.substring(0, 1);
            var firstCharCode = data.charCodeAt(0);
            if (firstCharCode == 65279) {
                console.log('First character "' + firstChar + '" (character code: ' + firstCharCode + ') is invalid so removing it.');
                data = data.substring(1);
            }


            var parsedJson = JSON.parse(data);

            parsedJson.result.list.forEach(function(entity, i) {
                projectMap[entity.ProjectID] = entity;

            });
            

            var resData = projectMap[ProjectID];
			
			console.log(resData);
			
			 parsedJson.result.list=[resData];

            //data=data.replace(/(\r\n|\n|\r)/gm,"");


            res.end(JSON.stringify(parsedJson));

        } catch (err) {
            console.log(err);
        }



    });
	 break;
     
	 //查詢個人捐款資料
	 case "donPersonal":	
	     var args = JSON.parse(reqBody.queryRequest.args[0]);
		 
		// console.log(args);
		 
		 var argsBody =args.body;
		 
		  console.log(argsBody);
		 
		 //console.log(argsBody.ProjectID);
		 var ProjectID=argsBody.projectID;
		 var IDN=argsBody.IDN;
		 var PayInfo=argsBody.PayInfo;
		 var Receipt=argsBody.Receipt;
		 
		
		 
		var filedir= dir + "/" + "donPersonal-"+ProjectID+"-"+IDN+"-"+PayInfo+"-"+Receipt+".json";
	
		 
		fs.readFile(filedir, 'utf8', function(err, data) {
       
	   
	   console.log(data);

        var projectMap = {};

        try {

            //https://stackoverflow.com/questions/40944167/unexpected-token-in-json-at-position-0-using-json-parse-in-node-with-valid-jso
            var firstChar = data.substring(0, 1);
            var firstCharCode = data.charCodeAt(0);
            if (firstCharCode == 65279) {
                console.log('First character "' + firstChar + '" (character code: ' + firstCharCode + ') is invalid so removing it.');
                data = data.substring(1);
            }


      


            res.end(data);

        } catch (err) {
            console.log(err);
        }



      });
			
      break;
	  
	  //查詢專案捐款資料
	  case "donProject":
	  
	   var args = JSON.parse(reqBody.queryRequest.args[0]);
		 
		// console.log(args);
		 
		 var argsBody =args.body;
		 
		  console.log(argsBody);
		 
		 //console.log(argsBody.ProjectID);
		 var ProjectID=argsBody.projectID;
		 
		 
		 console.log(ProjectID);
		 
		 
		 
		  
		var filedir= dir + "/" + "donProject-"+ProjectID+".json";
	
		 
		fs.readFile(filedir, 'utf8', function(err, data) {
       
	   
	   console.log(data);

        var projectMap = {};

        try {

            //https://stackoverflow.com/questions/40944167/unexpected-token-in-json-at-position-0-using-json-parse-in-node-with-valid-jso
            var firstChar = data.substring(0, 1);
            var firstCharCode = data.charCodeAt(0);
            if (firstCharCode == 65279) {
                console.log('First character "' + firstChar + '" (character code: ' + firstCharCode + ') is invalid so removing it.');
                data = data.substring(1);
            }


      


            res.end(data);

        } catch (err) {
            console.log(err);
        }



      });

	  
	  break;
	  
	  
	   //查詢專案撥付資料
	  case "appProject":
	  
	  
		var filedir= dir + "/appProject_result.json";
	
		 
		fs.readFile(filedir, 'utf8', function(err, data) {
       
	   
	   console.log(data);

        var projectMap = {};

        try {

            //https://stackoverflow.com/questions/40944167/unexpected-token-in-json-at-position-0-using-json-parse-in-node-with-valid-jso
            var firstChar = data.substring(0, 1);
            var firstCharCode = data.charCodeAt(0);
            if (firstCharCode == 65279) {
                console.log('First character "' + firstChar + '" (character code: ' + firstCharCode + ') is invalid so removing it.');
                data = data.substring(1);
            }


      


            res.end(data);

        } catch (err) {
            console.log(err);
        }



      });
	  
	  
	  break;
	  
	  /* 查詢帳鏈基本料*/
	  case "ccInfo":
			
	     fs.readFile(dir + "/" + "ccInfo_result.json", 'utf8', function(err, data) {
                //console.log( data );
                res.end(data);

            });
	  break;
	  
        default:
            res.end("G2");
    }




});




module.exports = router;