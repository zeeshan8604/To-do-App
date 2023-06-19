module.exports.home = function(req,res){
    // fetching using mongoose
        return res.render('home',{
            title:"Home"
           
        })
    }