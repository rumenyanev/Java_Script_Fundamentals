/*
let object = {
    name: 'Stavry',
    age: 20
}
________________
let object = {}
object.name = 'Stavry';
object.age = 20;

_________________

let object = {};
object['name'] = 'Stavry';
object['age'] = 20;

________________

assArr['key'] //person['age']

or 

assArr[key] //key = "age"; person[key]

___________________*/
let assArr = {
    name: 'Stavry',
    age: 20
}

for (const key in assArr) {  // 'for in ' - iteration object for 'key'
                             // 'for of ' - iteration object for 'value'
    
        console.log(`${key} : ${assArr[key]}`);
        
    
}