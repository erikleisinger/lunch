/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function(hungry, availableTime) {
  if (hungry === false) {
    console.log("I'm not hungry, so I'm going to wait to take my lunch.");  
  } else if (hungry === true) {
    if (availableTime < 20) {
      console.log("I'm hungry and I have " + availableTime + " minutes for lunch.");
      console.log("I should pick something up and eat it in the lab.");
    } else if (availableTime >= 20 && availableTime <= 30) {
      console.log("I'm hungry and I have " + availableTime + " minutes for lunch.");
      console.log("Maybe I'll pop out and try somewhere new.");
    } else if (availableTime > 30) {
      console.log("I'm hungry and I have " + availableTime + " minutes for lunch.");
      console.log("I have tons of time, so I can do whatever I want! But this is bootcamp... I probably shouldn't take too much time.");
    }
  }
}


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */


whatToDoForLunch(true, 20);

whatToDoForLunch(true, 50);

whatToDoForLunch(false, 30);

whatToDoForLunch(true, 15);
