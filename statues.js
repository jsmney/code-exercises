function makeArrayConsecutive2(statues) {
    //determine smallest statue
    debugger;
    let smallestStatue = Math.min.apply(null, statues);
    //determine largest statue
    let largestStatue = Math.max.apply(null, statues);
    //declare counter of add'l statues needed
    let addlStatues = 0;
    //create the array of statues to be in numerical order\
    let orderedStatues = [smallestStatue];
    //iterate through array
    for (let i = smallestStatue; i < largestStatue; i++) {
        //if array contains previous size + 1, push it to array
        if (statues.includes(i + 1)) {
            orderedStatues.push(statues[statues.indexOf(i + 1)]);
        }
        //else, increase counter of add'l statues needed
        else {
            addlStatues++;
        }
    }
    //return counter 
    return addlStatues;
}
makeArrayConsecutive2([1,3,4,6]);