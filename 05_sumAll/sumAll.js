const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (isNaN(num1) || isNaN(num2)) {
        return "ERROR";
    }
    else if (typeof num1 === "string" || typeof num2 === "string") {
        return "ERROR";
    }
    else if (num1 > num2) {
        let i = (num2 - 1);
        let sum = 0;
        do {
            i++;
            console.log(i);
            sum += i;
            console.log(sum);
        } while (i < num1);
        return sum;
    }
    else {
        let i = (num1 - 1);
        let sum = 0;
        do {
            i++;
            console.log(i);
            sum += i;
            console.log(sum);
        } while (i < num2);
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
