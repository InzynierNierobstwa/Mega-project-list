//boki trójkąta

const a = 5;
const b = 6;
const c = 7;

const triangle = [a, b, c];


function maxValue(array) {
    return Math.max.apply(Math, array);
}

console.log(maxValue(triangle));

function triangleCheck(array) {
    let sum = 0;
    for(let i = 0; i < triangle.length; i++) {
        sum += triangle[i];
        sumTriangle = sum - maxValue(array); 
    }
    console.log(sumTriangle);
    
    if (maxValue(array) < sumTriangle) {
        console.log("You can build triangle")
    }
    else {
        console.log("You can not build triangle");
    }
}

triangleCheck(triangle);

//heron formula
function triangleArea(array) {
    let sum = 0;
    for (let i = 0; i < triangle.length; i++) {
        sum += triangle[i];
    }
    height = sum/2;
    console.log(height);

    let area = 0;
    area = Math.sqrt(height*(height - triangle[0])*(height - triangle[1])*(height - triangle[2]));

    return console.log(area);
}

triangleArea(triangle);