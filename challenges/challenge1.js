/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know? 
 * A. Looking at the code, console.log that is not in the function snooze should print fist so "Step 1". 
 *    As we discussed in the class, Synchronous execution means that the line of code will be executed one after the other based on the order they are.
 *    So console.log('Step 1'); will be printed first as it is synchronous. Next would be Step 3 as it is also synchronus. Now the  
 *    snooze function will be executed asynchronously as it has setTimeout to delay the execution of the action function(that means that it allow different line of codes to be executed at the same time) so next would be "Step 2" followed by 
 *    "Async Action completed via callback".
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * A. Step 1
 *    Step 3
 *    Step 2
 *    Async Action completed via callback
 * 
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * A. Same order as the snooze function still will be executed asynchronous (In javascript, callback functions (setTimeout) are asynchronous).
 *    Yes.  
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

