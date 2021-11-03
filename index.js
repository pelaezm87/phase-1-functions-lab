// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42)
        return blocks - 42;
    else (blocks < 42)
        return 42 - blocks;
}

function distanceFromHqInFeet(feet) {
    distanceFromHqInBlocks(feet);
    if (feet > 42)
        return (feet-42)*264;
    else (feet < 42)
        return (42-feet)*264;
}

function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(start-destination)*264;
    return distance;
}

function calculatesFarePrice (start, destination) {
    distanceTravelledInFeet(start, destination);
    let blockDistance = (start - destination);
    let distance = Math.abs(blockDistance * 264);

    if (distance <= 400)
        {return 0;}

    else if (distance >= 401 && distance < 2000)
        {return (distance - 400)*0.02;}

    else if (distance >= 2001 && distance <= 2500)
        {return 25;}

    else
        {return "cannot travel that far";}
}
