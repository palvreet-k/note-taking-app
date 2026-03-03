import User from "../models/user.js"

export const showUserLoginPage = (req,res)=>{
    res.render('users/userLogin');
}

export const loginSucess = async (req,res)=>{
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (!user) {
        return res.status(401).render('users/userLogin');
    }

    res.redirect(`/users/${user._id}/notes`);
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

