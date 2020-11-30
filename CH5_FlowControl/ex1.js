false || (true && false);     //returns false because both sides evaluate to false
true || (1 + 2);      //evaluates to true just based on the 'true' value since it is using short-circuit evaluation
(1 + 2) || true;    //evalutes to true based on 1+2, since 3 is truthy
true && (1 + 2);    //is true since both sides are truthy
false && (1 + 2);   //false just based on false value and short-circuit evaluation
(1 + 2) && true;    //true since both sides are truthy
(32 * 4) >= 129;  //false because 32*4 is 128 and is not greater than or equal to 129
false !== !true;  //both sides evaluate to false which are equal, but !== reverses this to false
true === 4;  //results in true since 4 is truthy
false === (847 === '847');  //results in true because both sides equate to false; on right, there is a type difference
false === (847 == '847');      //results in false because right side equates to true because == is not a strict comparison
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;   //results in true because 82 === 82
