let friend = {};
friend = {name: 'Jose', 
sexo: 'M', 
weigh: 85.4, 
engordar(p=0){
        console.log('Engordou')
        this.weigh += p;
}};


console.log(friend.name)
friend.engordar(2);
console.log(friend.weigh);