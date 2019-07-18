//Create a function that takes an array of names and returns an array with the first letter capitalized.

function capMe(arr) {
    return arr.map(function (string) {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    })
}


console.log(capMe(["mavis", "senaida", "letty"])); // ["Mavis", "Senaida", "Letty"]

console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])) // ["Samuel", "Mabelle", "Letitia", "Meridith"]

console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])) // ["Slyvia", "Kristal", "Sharilyn", "Calista"]

