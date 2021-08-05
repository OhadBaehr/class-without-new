## USAGE
ES6:


    import  classWithoutNew  from  'class-without-new'
    export  const  Dog= classWithoutNew(class  Dog{...})

Node:

  
    const  classWithoutNew = require('class-without-new')
    const  Dog= classWithoutNew(class  Dog{...})
    module.exports=Dog
