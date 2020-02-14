const express = require('express');
const router = express.Router()
const users = require('../models/signupcustomer.model');
const yearthis=[0,0,0,0,0,0,0,0,0,0,0,0];
const yearpre=[0,0,0,0,0,0,0,0,0,0,0,0];
const bothyear=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const datee=new Date();
router.get('/pass',async(req,res)=>{
    const year=datee.getFullYear();
    const month=datee.getMonth();
     users.find()
     .then(docs=>{

        
          for(let i=0;i<docs.length;i++){
        //    // res.send(docs[i].email);
            
                if(docs[i].signup_date.getFullYear()==year){
                    switch(docs[i].signup_date.getMonth()){
                        case 0:
                            yearthis[0]+=1;
                            break;
                        case 1:
                            yearthis[1]+=1;
                            break;
                        case 2:
                            yearthis[2]+=1;
                            break;
                        case 3:
                            yearthis[3]+=1;
                            break;
                        case 4:
                            yearthis[4]+=1;
                            break;
                        case 5:
                            yearthis[5]+=1;
                            break;
                        case 6:
                            yearthis[6]+=1;
                            break;
                        case 7:
                            yearthis[7]+=1;
                            break;
                        case 8:
                            yearthis[8]+=1;
                            break;
                        case 9:
                            yearthis[9]+=1;
                            break;
                        case 10:
                            yearthis[10]+=1;
                            break;
                        case 11:
                            yearthis[11]+=1;
                            break;
                        
                        
                    }
                }else{
                    if(docs[i].signup_date.getFullYear()==(year-1)){
                        switch(docs[i].signup_date.getMonth()){
                            case 0:
                                yearpre[0]+=1;
                                break;
                            case 1:
                                yearpre[1]+=1;
                                break;
                            case 2:
                                yearpre[2]+=1;
                                break;
                            case 3:
                                yearpre[3]+=1;
                                break;
                            case 4:
                                yearpre[4]+=1;
                                break;
                            case 5:
                                yearpre[5]+=1;
                                break;
                            case 6:
                                yearpre[6]+=1;
                                break;
                            case 7:
                                yearpre[7]+=1;
                                break;
                            case 8:
                                yearpre[8]+=1;
                                break;
                            case 9:
                                yearpre[9]+=1;
                                break;
                            case 10:
                                yearpre[10]+=1;
                                break;
                            case 11:
                                yearpre[11]+=1;
                                break;
                            
                            
                        }
                    }

                }
                
        
         

        }
        var i=0;
        yearpre.forEach(element=>{
            bothyear[i]=element;   
           i+=1;
            
        })
        i=12;
        yearthis.forEach(element=>{
           bothyear[i]=element;   
           i+=1;
            
        })
        var c=month+12;
        var i=c-9;
        var newarry=[];
        for(i;i<=c;i++){
           newarry[i]= bothyear[i]

        //    console.log(newarry);
        }
        let info=newarry;
        res.json(info)
        for(i;i<=c;i++){
            newarry[i]= 0;
         }
         for(i=0;i<12;i++){
            yearthis[i]= 0;
            yearpre[i]=0;
         }
         for(i=0;i<24;i++){
           bothyear[i]=0;
         }

     })
     .catch()
})



module.exports= router;