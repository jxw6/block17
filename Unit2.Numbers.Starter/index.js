//Prompt the user for a list of integers separated by commas
const str = window.prompt('enter some numbers, like this', '1,2,3,3,5,9');

// Complete the Numbers class below
// the constructor has already been provided
class Numbers{
  constructor(data){
    //data can either be a string or an array of numbers
    if(typeof data === 'string'){
      this.data = str.split(',').map(number => number*1);
    }
    else {
      this.data = data;
    }
  }
  count(){
    return this.data.length;
    //return the count of numbers in data
  }
  printNumbers(){
    //print the numbers in data
    function getNumberAndIndex(element, index) {
      console.log(`Number: ${element} Index: ${index}`)
    }
    this.data.forEach(getNumberAndIndex)
  }
  odds(){
    //return the odd numbers in data
    const result = this.data.filter(oddNumbers => oddNumbers%2 === 1)
    return result
  }
  evens(){
    //return the even numbers in data
    const result = this.data.filter(evenNumbers => evenNumbers%2 === 0)
    return result
  }
  sum(){
    //return the sum of the numbers
    let calculatedSum = 0;
    this.data.forEach((number) => {
      calculatedSum += number
    })
    return calculatedSum
  }
  product(){
    //return the product of the numbers
    let calculatedProduct = 1;
    this.data.forEach((number) => {
      calculatedProduct *= number
    })
    return calculatedProduct
  }
  greaterThan(target){
    //return the numbers greater than the target
    let count = 0;
    this.data.forEach(element => {
      if (target < element) {
        count++;
      }
    })
    return count
  }
  howMany(target){
    //return the count of a given number
    const result = this.data.filter(matching => matching === target)
    return result.length
  }
}

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count());//returns count of numbers
n1.printNumbers();//prints the number along with their indexes
console.log(n1.odds());//returns odd numbers
console.log(n1.evens());//returns even numbers
console.log(n1.sum());//returns sum of numbers
console.log(n1.product());//returns product of numbers
console.log(n1.greaterThan(3));//returns numbers greater than another number
console.log(n1.howMany(3));//return the count of a specific number

