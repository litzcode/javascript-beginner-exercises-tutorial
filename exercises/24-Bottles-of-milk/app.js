// Your code here:
function milkSong () {
    let initialMilk = 100;
    let numberOfMilk=initialMilk;
    while (numberOfMilk>0){
        numberOfMilk--;
        switch (numberOfMilk){
            case 0: 
                console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, "+(initialMilk-1)+" bottles of milk on the wall.");
                break;
            case 1: 
                console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
                break;
            default:
                console.log(numberOfMilk +" bottles of milk on the wall, "+numberOfMilk+" bottles of milk. Take one down and pass it around, "+(numberOfMilk-1)+" bottles of milk on the wall.");
                break;
        }
    }
    return numberOfMilk;
}

milkSong();

