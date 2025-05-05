const slowAdd = (a,b) => {
    setTimeout(() => {
        console.log(a+b)
    }, 0);
}

slowAdd(3,3)
console.log('sync code');
