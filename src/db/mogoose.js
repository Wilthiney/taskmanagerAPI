const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGOBD_URL,{

    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
})
.then(() =>console.log('connection a mongodb reussi'))
.catch((err)=> console.log('connection a la base de donne a echouet'))