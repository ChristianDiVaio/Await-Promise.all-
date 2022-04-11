let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  /*let steamBrocolli = foodArray[0];
  let cookRice = foodArray[1];
  let bakeChicken = foodArray[2];
  let cookBeans = foodArray[3];
  */

   console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}
serveDinnerAgain()



