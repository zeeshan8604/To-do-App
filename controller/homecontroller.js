// const TodoLists = require('../models/todolist');

//     module.exports.home = function(req,res){
//         // fetching using mongoose
//             return res.render('home',{
//                 title:"Home"
               
//             });
//     };
 const Todolist = require('../models/todolist');
const TodoLists = require('../models/todolist')
// function for redirecting to main home page
module.exports.home =  async function(req,res){
    // fetching using mongoose
    
       const dbtodo= await TodoLists.find({});
        return res.render('home',{
            title:"Home",
            todoList:dbtodo
           
        });
    }

    //function for new Data
    function dateValeu(dueDate){
        let months=['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        newDate=""
        let monapp='';
        if(dueDate[1]=='01'){
            monapp=months[0];
        }
        else if(dueDate[1]=='02'){
            monapp=months[1]
        }
        else if(dueDate[1]=='03'){
            monapp=months[2]
        }
        else if(dueDate[1]=='04'){
            monapp=months[3]
        }
        else if(dueDate[1]=='05'){
            monapp=months[4]
        }
        else if(dueDate[1]=='06'){
            monapp=months[5]
        }
        else if(dueDate[1]=='07'){
            monapp=months[6]
        }
        else if(dueDate[1]=='08'){
            monapp=months[7]
        }
        else if(dueDate[1]=='09'){
            monapp=months[8]
        }
        else if(dueDate[1]=='10'){
            monapp=months[9]
        }
        else if(dueDate[1]=='11'){
            monapp=months[10]
        }
        else if(dueDate[1]=='12'){
            monapp=months[11]
        }
       newDate=dueDate[2]+'-'+monapp+ '-'+dueDate[0];
       return newDate;

    }



    //funtion to creat todo list

    module.exports.createTodo=function(req, res){
        dueDate=req.body.dateValue.split('-');
        let newdate='';
        newdate=dateValeu(dueDate);
        Todolist.create({
            desc:req.body.desc,
            category:req.body.category,
            dueDate:newdate
        },function(err, newArr){
            if(err){
                console.log('opps error occured');
                return;
            }
            return res.redirect('/');
        })
    }


    //function for deleting todo list
    module.exports.deleteTodo=function(res, req){
        sp=req.query.id;
        news=sp.split(',');
        for(let i=0; i<newsp.length; i++){
            Todolist.findByIdAndDelete(newsp[i], function(err){
                if(err){
                    console.log('deletion error');
                    return;
                }
            })
        }
        return res.redirect('/');
    }


    //funtion for fetching data for edit page
    module.exports.Editpage=function(res, req){
        console.log('zzzz', req.query);
        Todolist.findById(req.query.id, function(err, todolists){
            if(err){
                console.log('hi zee its error', err);
                return;
            }
            return res.render('editPage', {
                title: 'Edit page',
                todoList:todolists
            })
        })
    }

    // function for updated data after the todo is edited
    module.exports.editDetails=function(res, req){
        dueDate=req.body.dueDate.split('-');
        newdate= DateValeu(dueDate);     
     Todolist.updateOne({_id:req.query.id},{$set:{desc:req.body.desc,category:req.body.category,dueDate:newdate}} ,function(err,todoData){
        if(err){console.log('erroe while updating'); return}
        return res.redirect('/');
    })
    }