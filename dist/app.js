"use strict";
// class Department {
//     name:string
const check = (animal) => {
    let ani;
    switch (animal.type) {
        case 'bird':
            ani = animal.flying;
            break;
        case 'dog':
            ani = animal.running;
            break;
    }
    return console.log(ani);
};
check({ type: "bird", flying: "yes it is" });
