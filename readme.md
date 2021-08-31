## USAGE
ES6:

```js
    import proxy from ('class-without-new')
```
        

Node:

  
```js
    const transpile= require('class-without-new')
```


Usage:

```js
    const Animal = transpile(class Animal {
		static create() {
			return new Animal
		}
		constructor() {

		}
		bla(){
			return 2
		}
		get ha(){
			return 3
		}
	})

	const Monkey = transpile(class Monkey extends Animal {
		static create() {
			return new Monkey
		}
		constructor() {
			super()
		}
	});

	console.log(Monkey().ha)
```