var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

bulletPosition=spinChamber();
// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    //if (...) return ("You're dead!");
    //else return ("Keep playing!");
    if (bulletPosition==spinnerPosition){
        return "You're dead!";
    } else {
        return "Keep playing!";
    }
};
console.log(bulletPosition);
console.log(fireGun(5));