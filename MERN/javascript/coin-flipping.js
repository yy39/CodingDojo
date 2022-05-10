function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    let headsCount = 0;
    let attempts = 0;
    return new Promise((resolve, reject) => {
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log("Flipped " + result);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if (headsCount === 5 && attempts < 100) {
            resolve(`It took ${attempts} attempts`);
        } else {
            reject(`Rejected since we ran ${attempts} out of our 100 chances.`);
        }
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");
