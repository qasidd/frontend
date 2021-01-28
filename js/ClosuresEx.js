// 1
let outer = (par1) => {

    let inner = (par2) => {
        return par1 * par2;
    }

    return inner;
}

let fun = outer(2);
console.log(fun(3));

// 2
function person(fname) {
    let _fname = fname;

    return {
        getId: () => _fname,
        setId: (fname) => _fname = fname
    };
}

let p = person("sidd");
console.log(p.getId());
p.setId("grg");
console.log(p.getId());
