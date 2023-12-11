/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    str
      .replace(" ", "")
      .split("")
      .filter((char) => {
        let charCode = char.charCodeAt(0);
        return (
          !(charCode >= 65 && charCode <= 90) &&
          !(charCode >= 97 && charCode <= 122) &&
          char !== " "
        );
      })
      .join("");

    let infixStk = this.removeSpaces(str);
    let postfixStk = this.infixToPostFix(infixStk);
    this.result = this.resolvePostfixStk(postfixStk);
  }

  infixToPostFix(str) {
    const stk = [];
    let postfixStr = [];
    for (let i = 0; i < str.length; i++) {
      // if we have encountered a number in our infix stack, we will push to postfix stack as it is.
      if (typeof str[i] === "number") postfixStr.push(str[i]);
      // if we have encountered an opening parenthesis, we will push to temporary stack.
      else if (str[i] === "(") stk.push("(");
      // if we have encountered a closing parenthesis, we will pop out elements from temp stack and push it to postfix stack until opening parenthesis is at the top of temp stack and then remove that opening parenthesis at the end as well.
      else if (str[i] === ")") {
        while (stk[stk.length - 1] !== "(") {
          postfixStr.push(stk.pop());
        }
        stk.pop();
      }
      // if we haven't encountered numbers or parenthesis, it means that we have encountered operators
      else {
        // if we do not have any element inside temp stack we will push the operator to temp stack.
        if (stk.length === 0) stk.push(str[i]);
        else {
          // until temp stack is not empty and top of the temp stack is not an opening parenthesis we will loop,
          while (stk.length !== 0 && stk[stk.length - 1] !== "(") {
            // if operator is subtract or addition we will simply pop out value from temp stack and push them to postfix stack until loop breaks.
            if (str[i] === "-" || str[i] === "+") {
              postfixStr.push(stk.pop());
            }

            // if operator is multiply or divide, we will pop only if top of temp stack is multiply otherwise we will break the loop.
            else if (str[i] === "*" || str[i] === "/") {
              if (stk[stk.length - 1] === "*" || stk[stk.length - 1] === "/") {
                postfixStr.push(stk.pop());
              } else {
                break;
              }
            }
          }

          // we will push current operator in temp stack
          stk.push(str[i]);
        }
      }
    }

    // if our temp stack is not empty by the end of our loop, we will pop it out till it is empty and push them into postfix stack.
    while (stk.length !== 0) postfixStr.push(stk.pop());
    console.log(postfixStr);

    // we will return postfix stack
    return postfixStr;
  }

  resolvePostfixStk(postfixStk) {
    let stk = [];

    // we will loop through the postfix stack
    for (let i = 0; i < postfixStk.length; i++) {
      // if we encounter a number, we will it to our new temp stack.
      if (typeof postfixStk[i] === "number") {
        stk.push(postfixStk[i]);
      }

      // otherwise, it means that we have encountered an operator.
      else {
        // we will removed last elements from temp stack
        let secondNumber = stk.pop();
        let firstNumber = stk.pop();

        // we will perform operator based on the operator encountered and push the result to temp stack again.
        switch (postfixStk[i]) {
          case "+":
            stk.push(firstNumber + secondNumber);
            break;
          case "-":
            stk.push(firstNumber - secondNumber);
            break;
          case "*":
            stk.push(firstNumber * secondNumber);
            break;
          case "/":
            if (secondNumber === 0) throw new Error();
            stk.push(firstNumber / secondNumber);
            break;
        }
      }
    }

    // after looping, the top of the temp stack we will our required result.
    return stk.pop();
  }
}

module.exports = Calculator;
