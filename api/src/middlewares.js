const isLogedIn = (req,res,next) => {
    if(req.isAuthenticated()){
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else{
        res.redirect("/login");
    }
}

const isLogedAsAdmin = (req,res,next) => {
    if(req.isAuthenticated()){
        if(req.user.isAdmin){
            next();
        }else{
            res.status(400)
        }
    }else{
        res.redirect("/login");
    }
}

module.exports = {
    isLogedIn,
    isLogedAsAdmin
}