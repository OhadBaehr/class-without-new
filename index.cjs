module.exports = function classWithoutNew(c){
    return new Proxy(
        Reflect.construct.bind(null, c),
        {
            get(_, prop, val) {
                // access static 
                return Reflect.get(c, prop, val);
            },
            set(_, prop, val) {
                // access static 
                return Reflect.set(c, prop, val);
            },
            apply(target, _, argumentsList) {
                // make the constructor work 
                return target({ ...argumentsList, length: argumentsList.length });
            }
        }
    );
}