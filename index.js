// Code your solution here

const drivers = [
    { name: "Alex", hometown: "SB" },
    { name: "Renzo", hometown: "LA" },
];

const names = ["Sammy", "sally", "RINGO"];

function findMatching(driverArray, driverName) {
    const driverNameUpper = driverName.toUpperCase();
    const matchedNames = driverArray.filter(
        (driver) => driver.toUpperCase() === driverNameUpper
    );
    return matchedNames;
}

function fuzzyMatch(driverArray, string) {
    const fuzzyNames = driverArray.filter(function(driver) {
        return driver.startsWith(string);
    });
    return fuzzyNames;
}

function matchName(driverObjects, string) {
    const matchedNames = driverObjects.filter(function(driver) {
        return driver.name === string;
    });
    return matchedNames;
}