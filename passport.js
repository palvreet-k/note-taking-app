import passport from "passport";
import {Strategy as LocalStrategy} from "passport-local";
import User from "./models/user.js"

passport.use(

    //Strategy
    new LocalStrategy(async(username, password, done) => {
        try {
            const user = await User.findOne({ username: username });
            if (!user) {
                return done(null, false);
            }
            if (user.password !== password) {
                return done(null, false);
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })   
);

// Serialize

passport.serializeUser((user, done)=>{
    done(null, user._id.toString())
})

//Deserialize

passport.deserializeUser(async(id, done)=>{
    try{
        const user = await User.findById(id);
        done(null, user);
    }
    catch(err){
    done(err);
    }
});

export default passport;