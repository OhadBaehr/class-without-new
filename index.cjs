module.exports=function(c){
    return  new Proxy(c ,{
        apply(target, args, argumentsList) {
            return new target(...argumentsList);
        }
    });
}   