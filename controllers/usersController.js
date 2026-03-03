import User from "../models/user.js"
import passport from "../passport.js";

export const showUserLoginPage = (req,res)=>{
    res.render('users/userLogin');
}

export const loginUser = (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/crash'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect(`/users/${user._id}/notes`);
        });
    })(req, res, next);
};

export const logoutUser = (req, res, next) => {
    req.logout(function(err){
        if(err){return next(err)}
        res.redirect("/")
    })
};

export const loginFailed = (req,res,next)=> {
    const error = new Error("Authenticated failed");
    error.status = 401;
    next(error);
}

export const showSignupPage= (req,res)=>{
    res.render('users/userSignUp');
}

export const signupSucess  = async (req,res)=>{
    await User.create({
        username: req.body.username,
        password: req.body.password
    });
    res.render('users/userLogin');
}

