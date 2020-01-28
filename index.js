let wakeDog = (a, b) => {
    return `Wake ${a} the ${b}`
}

let leashDog = (a, b) => {
    return `Leash ${a} the ${b}`
}

let walkToPark = (a, b) => {
    return `Walk to the park with ${a} the ${b}`
}

let throwFrisbee = (a, b) => {
    return `Throw the frisbee for ${a} the ${b}`
}

let walkHome = (a, b) => {
    return `Walk home with ${a} the ${b}`
}

let unleashDog = (a, b) => {
    return `Unleash ${a} the ${b}`
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

let exerciseDog = (a, b) => {
    let result = []
    for(const exercise of routine) {
        result.push(exercise(a,b))
    }
    return result
}