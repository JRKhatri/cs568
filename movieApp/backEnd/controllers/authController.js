const jwt = require('jsonwebtoken');
const UserCollection = require('../models/user');
const accessTokenSecret = 'movieAppLogin'

exports.login = async (req, res, next) =>{
    try{
        
        const user = await UserCollection.findOne(req.body);
        console.log(user.role)
        
        if(user){ 
            const accessToken = jwt.sign({userName : user.userName, role:user.role}, accessTokenSecret);
            res.json({accessToken})
        }else {
            res.status(200).json({'error': 'username or password invalid'})
        }
    } catch(error){
        next(error)
    }
}

exports.authorize = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
        if(authHeader){
            const jwToken = authHeader.split(' ')[1];
            console.log(jwToken)
             //Asynchronous way -
            // jwt.verify(jwToken,accessTokenSecret, (err, user) => {
            //     if(err){
            //         res.status(403).json({error : "Forbidden"})
            //     }else{
            //         next()

            //     }
            // })

            //below synchronous way
          try{
            const user = jwt.verify(jwToken, accessTokenSecret)
            req.user = user //in req body we pass property user which has payload value i.e user = {userName : user.userName, role:user.role} given from just above line verify

            next();
          } catch(error){
              res.status(403).json({error: 'Forbidden'})
          }
            
        }
    }

    exports.authorizeAdmin = (req, res, next) =>{
        if(req.user.role === 'admin'){  //req from above authorize function carry the user property which has value - {userName : user.userName, role:user.role}
            
            next()
        }else{
            return res.status(403).json({"error": "Forbidden"})
        }
    }
