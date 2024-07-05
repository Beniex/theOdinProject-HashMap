/*
if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
  }
  */

class HashMap{
    constructor(){
        this.buckets = new Array(16);
        this.bucketsNumber = 16; 
        this.loadFactorMax = 0.50;          
    }
    
    hash(key) {
        let hashCode = 0; 
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode = hashCode % this.bucketsNumber ; 
        }
     
        return hashCode;
    }

    calculateFactorLoad(){
        return this.length() / this.bucketsNumber; 
    }
    
    set(key, value){
        if (this.calculateFactorLoad() > this.loadFactorMax){
            this.bucketsNumber = this.bucketsNumber * 2; 
            let entries = this.entries(); 
            for(let i=0; i<entries.length; i++){
                this.set(entries[i][0], entries[i][1])
            }
        }
        this.buckets[this.hash(key)] = { key: key, value: value };

    }

    get(key){
        let hashCode = this.hash(key); 
        return this.buckets[hashCode].key;
    }
    has(key){
        for (let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i] == undefined){
            } else {
                if ( this.buckets[i].key == key){
                        return true; 
                }
            }
        }
        return false;   
    }

    remove(key){
        for (let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i] == undefined){
            } else {
                if ( this.buckets[i].key == key){
                    this.buckets[i] = undefined; 
                        return true; 
                }
            }
        }
        return false; 
    }
        
    length(){
        let length = 0 
        for (let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i] == undefined){
            } else {
                length ++; 
            }
        }
        return length; 
    }

    clear(){
        for (let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i] == undefined){
            } else {
                    this.buckets[i] = undefined; 
            }
        }
    }

    keys(){
        let keys = []; 
        for (let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i] == undefined){
            } else {
                keys.push(this.buckets[i].key); 
            }
        }
        return keys; 
    }

    values(){
        let values = []; 
        for (let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i] == undefined){
            } else {
                values.push(this.buckets[i].value); 
            }
        }
        return values; 
    }

    entries(){
        let entries = []; 
            for (let i = 0; i < this.buckets.length; i++){
                if(this.buckets[i] == undefined){
                } else {
                    let entry = [this.buckets[i].key, this.buckets[i].value]; 
                    entries.push(entry); 
                }
            }
            return entries; 
    }



}

const test = new HashMap() // or HashMap() if using a factory
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
console.log(test.calculateFactorLoad()); 
test.set('aaaaaahfh', 'silver'); 
test.set('ttttttt', 'silver'); 
test.set('bbbbbb', 'silver'); 
test.set('H', 'silver'); 
console.log(test.calculateFactorLoad()); 
console.log(test); 