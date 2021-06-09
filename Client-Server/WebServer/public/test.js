console.log("************************");
console.log("******* b - qObj *******");
console.log("************************");

console.log("--------b.i.1--------");
const qObjResult = qObj();
const objectMapArray = [...qObjResult.createObjects()];
objectMapArray.forEach((object) => {
  console.log(`Made by ${object[0]} : ${JSON.stringify(object[1])}`);
});
console.log("--------b.i.2--------");
console.log(qObjResult.chain());

console.log("--------b.i.3--------");
console.log(`Desc:\n ${qObjResult.desc}`);

console.log("\n");
console.log("************************");
console.log("******* c - qCalc *******");
console.log("************************");

const qCalcResults = qCalc();
const calculator = qCalcResults.calcFactory();
console.log(qCalcResults.desc);
console.log(`Current calculator value: (getValue()): ${calculator.getValue()}`);
console.log(`Add 5 to calculator (add(5))`);
calculator.add(5);
console.log(`Current calculator value: (getValue()): ${calculator.getValue()}`);
console.log(`Sub 3 from calculator (sub(3))`);
calculator.sub(3);
console.log(`Current calculator value: (getValue()): ${calculator.getValue()}`);

console.log("\n");
console.log("**************************");
console.log("******* d - qAsync *******");
console.log("**************************");

const qAsyncResult = qAsync();
console.log(qAsyncResult.desc);
console.log("Calling the exec function: it will takes 11.5s - WAIT!");
qAsyncResult.exec();
