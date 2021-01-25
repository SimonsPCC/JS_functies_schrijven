const calculateSupply = function(age, amaont) {
    var totalAmount = (80 - age) * amaont * 365;
    const leftoverAge = 80;
     console.log("You will need " + totalAmount + " pieces of chocolate to last you until the ripe age of " + leftoverAge );
}
calculateSupply(1, 1);
calculateSupply(79,1);
calculateSupply(79,10);
