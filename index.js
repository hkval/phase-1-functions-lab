// Code your solution in this file!

function distanceFromHqInBlocks(pickup){
    return Math.abs(42 - pickup);
};

function distanceFromHqInFeet(pickup){
    const blocks = distanceFromHqInBlocks(pickup);
    return blocks * 264;
};

function distanceTravelledInFeet(pickup,dropoff){
    return Math.abs(dropoff - pickup) * 264;
};

function calculatesFarePrice(pickup,dropoff){
    const dist = distanceTravelledInFeet(pickup,dropoff);
    if (dist > 2500){ 
            return 'cannot travel that far';
    } else if (dist > 400 && dist <= 2000){
            const fare = (dist - 400) * .02;
            return fare;
    } else if (dist > 2000 && dist <= 2500){
            const fare = 25;
            return fare;
    } else if (dist < 400){
            const fare = 0;
            return fare;
    }
    };