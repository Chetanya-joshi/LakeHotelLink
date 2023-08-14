const user = require('../user');
const jwt = require('jsonwebtoken');
const UserModel = require('../user')

module.exports.signup = (req, res) => {
    console.log(req.body);


    //email should not exist already

    const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
       .then(() => {

            res.send({ code : 200 , message: 'Signup success' });
        
        })
        
        .catch((err) => {
            res.send({ code : 500 , message: 'Signup Err' });
        });
}


module.exports.signin = (req, res) => {
    console.log(req.body);


    //email and password match

    UserModel.findOne({email : req.body.email}).then(result =>{
        console.log(result , '11')

        const token = jwt.sign({ userId: result._id }, 'your-secret-key', { expiresIn: '1h' });


        if(result.password !== req.body.password){
            res.send({code:404 , message:'password wrong'})
        }

        else{
            res.send({ name : result.name , userId: result._id ,email : result.email , code :200 , message : 'User Found' , token})
        }

       
    }).catch(err =>{
        res.send({code : 500 , message : 'User Not Found'})
    })
   

    // newUser.save()
    //     .then(() => {
    //         res.send({ code : 200 , message: 'Signup success' });
    //     })
    //     .catch((err) => {
    //         res.send({ code : 500 , message: 'Signup Err' });
    //     });
}
