//[0, 1, 2]
//[2, 1, 0]

function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length/2; i++) {
    console.log("how many times looped", i);
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }

  return arr;
}

console.log(reverseArrayInPlace([0, 1, 2, 3, 4, 5, 6, 7, 8]));

//1, 1, 2, 3, 5, 8, 13

function fib(pos){
    if(pos < 3) return 1;
    else {
      return fib(pos -1) + fib(pos - 2);
    }
}

console.log(fib(500))

function fibMemo(pos, cache) {
  cache = cache || [];
  if(cache[pos]) return cache[pos];
  else{
    if(pos < 3) return 1;
    else {
    cache[pos] = fibMemo(pos - 1, cache) + fibMemo(pos - 2, cache);
  }
  }
  return cache[pos];
}

console.log(fibMemo(500))
