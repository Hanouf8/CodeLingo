const quizzes = {
  /* Java Quiz */
  java: {
    beginner: [
      {
        question:
          "What is the first step to create a new Java project in an IDE like Eclipse?",
        options: [
          "Write your main method",
          "Create a new workspace",
          "Install Java Runtime Environment",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following is a valid declaration of a variable in Java?",
        options: ["int 1number;", "int number1;", "number1 int;"],
        answer: 1,
      },
      {
        question: "Which class is commonly used to get user input in Java?",
        options: ["Scanner", "InputStream", "Reader"],
        answer: 0,
      },
      {
        question: "What will the expression 5 + 3 * 2 evaluate to in Java?",
        options: ["16", "11", "13"],
        answer: 1,
      },
      {
        question: "What does the ++ operator do in Java?",
        options: [
          "Decreases the value by one",
          "Increases the value by one",
          "Multiplies the value by two",
        ],
        answer: 1,
      },
      {
        question:
          "What will be the output of the following code snippet? \n int a = 5; \n if (a > 3){ \n     System.out.println(Greater); \n } else } \n System.out.println(Smaller); } ",
        options: ["Greater", "Smaller", "No output"],
        answer: 0,
      },
      {
        question:
          "Which of the following is used as a logical AND operator in Java?",
        options: ["&", "&&", "|"],
        answer: 1,
      },
      {
        question: "What is the purpose of a switch statement in Java?",
        options: [
          "To execute a block of code multiple times",
          "To choose between multiple options based on a variable's value",
          "To declare new variables",
        ],
        answer: 1,
      },
      {
        question:
          "How many times will the loop below execute? int i = 0; while (i < 3) { i++;}",
        options: ["2 times", "3 times", "4 times"],
        answer: 1,
      },
      {
        question:
          "What distinguishes a do-while loop from a regular while loop?",
        options: [
          "It checks the condition before executing the loop body.",
          "It checks the condition after executing the loop body.",
          "It cannot run if the condition is false.",
        ],
        answer: 1,
      },
      {
        question: "How do you declare an array of integers in Java?",
        options: ["int[] arr;", "arr int[];", " int arr[];"],
        answer: 0,
      },
    ],
    intermediate: [
      {
        question:
          "Which method is used to convert a string to uppercase in Java?",
        options: ["toUpper()", " toUpperCase()", "upperCase()", "makeUpper()"],
        answer: 1,
      },
      {
        question: "What is the base case in a recursive function?",
        options: [
          "A condition that stops the recursion",
          "A call to the same function",
          "A return statement",
          "An iterative loop",
        ],
        answer: 0,
      },
      {
        question: "Which interface does not allow duplicate elements?",
        options: ["List", "Set", "Queue", "Map"],
        answer: 1,
      },
      {
        question: "How do you add an element to an ArrayList in Java?",
        options: [
          "arrayList.add(element)",
          "arrayList.insert(element)",
          "arrayList.push(element)",
          " arrayList.append(element)",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is true about a LinkedList?",
        options: [
          "It allows fast random access",
          " It uses a contiguous block of memory",
          "It can efficiently insert and delete elements",
          "It has a fixed size",
        ],
        answer: 3,
      },
      {
        question: " Which method removes the first element in a LinkedList?",
        options: ["removeFirst()", "deleteFirst()", "pop()", "removeHead()"],
        answer: 0,
      },
      {
        question: "Which method is used to convert a List to an array in Java?",
        options: [
          "toArray()",
          "convertToArray()",
          " listToArray()",
          " arrayList()",
        ],
        answer: 0,
      },
      {
        question: "Which method is used to sort a List in Java?",
        options: [
          "Collections.sort()",
          "List.sort()",
          "Array.sort()",
          "  sortList()",
        ],
        answer: 0,
      },
      {
        question: "Which method is used to reverse a List in Java?",
        options: [
          "Collections.reverse()",
          "List.reverse()",
          "reverseList()",
          "reverse()",
        ],
        answer: 0,
      },
      {
        question: "Which method fills a collection with a specified element?",
        options: [
          "Collections.fill()",
          "fillCollection()",
          "fill()",
          "listFill()",
        ],
        answer: 0,
      },
    ],
    advanced: [
      {
        question: "In Java, what is the main reason for using inheritance?",
        options: [
          "To create multiple instances of a class",
          "To achieve code reusability and polymorphism",
          "To increase the complexity of the code",
          "To restrict access to class members",
          "To enforce encapsulation",
        ],
        answer: 1,
      },
      {
        question:
          "In Java, which of the following statements about multilevel inheritance is true?",
        options: [
          "It can lead to ambiguity if the same method is overridden multiple times.",
          "It allows a class to inherit from multiple classes directly.",
          "It is not supported in Java at all.",
          "It creates a single inheritance chain without any complexity.",
          "It allows for a clear hierarchical structure of classes.",
        ],
        answer: 4,
      },
      {
        question: "How do you achieve multiple inheritance in Java?",
        options: [
          "By using multiple classes that inherit from a single class",
          "By using interfaces",
          "By using abstract classes",
          "By using the extends keyword",
          "By using the implements keyword only",
        ],
        answer: 1,
      },
      {
        question:
          "What is the primary difference between the this and super keywords in Java?",
        options: [
          "this refers to the superclass, while super refers to the current class.",
          "this is used to call the parent class constructor, while super is used to call the current class constructor.",
          "this refers to the current object, while super refers to the superclass object.",
          "this can only be used in instance methods, while super can be used in static methods.",
          "Both keywords are interchangeable in their use.",
        ],
        answer: 2,
      },
      {
        question:
          "Which of the following statements about method overriding is false?",
        options: [
          "The method in the subclass must have the same name and parameters as in the superclass.",
          "The overridden method can have a more restrictive access modifier.",
          "Method overriding allows for runtime polymorphism.",
          "A subclass can override a final method.",
          "The return type can be covariant.",
        ],
        answer: 3,
      },
      {
        question:
          "Which of the following statements is true regarding Java packages?",
        options: [
          "Packages can only be created in the default namespace.",
          "A class can belong to multiple packages.",
          "Packages help avoid naming conflicts among classes.",
          "The import statement is not needed when using classes from the same package.",
          "Packages can only contain classes, not interfaces.",
        ],
        answer: 2,
      },
      {
        question: "Which access modifier provides the widest access level?",
        options: [
          "private",
          "protected",
          "default (no modifier)",
          "public",
          "package-private",
        ],
        answer: 3,
      },
      {
        question: "Which statement about polymorphism is incorrect?",
        options: [
          "It allows methods to have the same name but different implementations.",
          "It can be achieved through both method overloading and method overriding.",
          "It is resolved at compile time in all cases.",
          "It enables a single interface to represent different data types.",
          "It is a fundamental principle of object-oriented programming.",
        ],
        answer: 2,
      },
      {
        question:
          "What is the primary benefit of dynamic method dispatch in Java?",
        options: [
          "It allows for static binding of methods.",
          "It enables method calls to be resolved at compile time.",
          "It facilitates runtime polymorphism.",
          "It restricts method access to the parent class only.",
          "It avoids method overriding.",
        ],
        answer: 2,
      },
      {
        question: "Which of the following cannot be declared as final in Java?",
        options: [
          "A method",
          "A variable",
          "A class",
          "An interface",
          "A constructor",
        ],
        answer: 3,
      },
    ],
  },

  /* java script Quiz */
  javas: {
    beginner: [
      {
        question: "1. What is a text editor?",
        options: [
          "A program to edit text files",
          "A type of web browser",
          "A database management tool",
        ],
        answer: 0,
      },
      {
        question: "2. What does 'console.log()' do?",
        options: [
          "Displays a message in the console",
          "Creates a new variable",
          "Opens a new window",
        ],
        answer: 0,
      },
      {
        question:
          "3. Which file extension is commonly used for JavaScript files?",
        options: [".js", ".html", ".css"],
        answer: 0,
      },
      {
        question: "4. How do you write 'Hello World' in JavaScript?",
        options: [
          "echo 'Hello World';",
          "print('Hello World');",
          "console.log('Hello World');",
        ],
        answer: 2,
      },
      {
        question: "5. What is a variable?",
        options: ["A way to store data", "A type of function", "An HTML tag"],
        answer: 0,
      },
      {
        question: "6. Which of the following is a data type in JavaScript?",
        options: ["String", "Number", "Both"],
        answer: 2,
      },
      {
        question: "7. How do you concatenate two strings?",
        options: [
          "string1 + string2",
          "string1 & string2",
          "string1 . string2",
        ],
        answer: 0,
      },
      {
        question: "8. What is the result of 5 + 10?",
        options: ["15", "510", "Error"],
        answer: 0,
      },
      {
        question: "9. How do you get user input in a web browser?",
        options: ["prompt()", "input()", "alert()"],
        answer: 0,
      },
      {
        question: "10. What symbol is used for comments in JavaScript?",
        options: ["//", "#", "--"],
        answer: 0,
      },
    ],
    intermediate: [
      {
        question: "1. What is the output of 5 + 3 * 2?",
        options: ["16", "11", "10", "8"],
        answer: 1,
      },
      {
        question: "2. How do you declare an array in JavaScript?",
        options: [
          "var arr = {}",
          "var arr = []",
          "var arr = ()",
          "var arr = '<>'",
        ],
        answer: 1,
      },
      {
        question: "3. Which of the following is a function declaration?",
        options: [
          "function myFunction()",
          "var myFunction = function()",
          "myFunction()",
          "function:myFunction()",
        ],
        answer: 0,
      },
      {
        question:
          "4. How do you access an HTML element with the ID 'myElement'?",
        options: [
          "document.getElementById('myElement')",
          "$('#myElement')",
          "document.querySelector('#myElement')",
          "All of the above",
        ],
        answer: 3,
      },
      {
        question: "5. What does 'addEventListener' do?",
        options: [
          "Adds an event to an element",
          "Removes an event from an element",
          "Triggers an event",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question:
          "6. Which of the following is a way to create a basic calculator function?",
        options: [
          "function calculate(a, b) { return a + b; }",
          "const calculate = (a, b) => a + b;",
          "Both of the above",
          "None of the above",
        ],
        answer: 2,
      },
      {
        question:
          "7. What will the following code output? if (true) { console.log('Hello'); } else { console.log('World'); }",
        options: ["Hello", "World", "undefined", "Error"],
        answer: 0,
      },
      {
        question:
          "8. Which statement is used to perform different actions based on different conditions?",
        options: ["if statement", "switch statement", "both", "none"],
        answer: 2,
      },
      {
        question:
          "9. How do you compare two values for equality in JavaScript?",
        options: ["==", "===", "Both", "None"],
        answer: 2,
      },
      {
        question:
          "10. What is the output of the following switch statement? switch (2) { case 1: console.log('One'); break; case 2: console.log('Two'); break; default: console.log('Default'); }",
        options: ["One", "Two", "Default", "Error"],
        answer: 1,
      },
    ],
    advanced: [
      {
        question: "1. What is an object in JavaScript?",
        options: [
          "A collection of properties",
          "A variable type",
          "A function",
          "A block of code",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question: "2. How do you create a real-world object in JavaScript?",
        options: [
          "Using a constructor function",
          "Using a class",
          "Using object literals",
          "All of the above",
          "None of the above",
        ],
        answer: 3,
      },
      {
        question:
          "3. What will the following code output? let i = 0; while (i < 3) { console.log(i); i++; }",
        options: ["0 1 2", "0 1 2 3", "1 2 3", "3", "Error"],
        answer: 0,
      },
      {
        question:
          "4. Which of the following is a valid way to build a password checker?",
        options: [
          "function checkPassword(password) { return password.length >= 8; }",
          "if(password.length > 8) { return true; }",
          "Both of the above",
          "None of the above",
          "function validate(p) { return p.size > 8; }",
        ],
        answer: 2,
      },
      {
        question: "5. How can you iterate over an array using a for loop?",
        options: [
          "for (let i in array) { }",
          "for (let i = 0; i < array.length; i++) { }",
          "for (let item of array) { }",
          "Both A and B",
          "All of the above",
        ],
        answer: 1,
      },
      {
        question: "6. Which statement is true about nested loops?",
        options: [
          "They can improve performance",
          "They can access elements in 2D arrays",
          "They are not allowed in JavaScript",
          "They can only be while loops",
          "None of the above",
        ],
        answer: 1,
      },
      {
        question: "7. How do you use a forEach loop in JavaScript?",
        options: [
          "array.forEach(item => { });",
          "forEach(array) { }",
          "array.forEach(item in array) { }",
          "for (item : array) { }",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question: "8. Which method is used to measure timing in JavaScript?",
        options: [
          "setInterval()",
          "setTimeout()",
          "performance.now()",
          "stopwatch()",
          "All of the above",
        ],
        answer: 2,
      },
      {
        question: "9. Which of the following is true about web storage?",
        options: [
          "It has a limit of 5MB per domain",
          "It can store data in key/value pairs",
          "It is synchronous",
          "Both A and B",
          "All of the above",
        ],
        answer: 3,
      },
      {
        question:
          "10. What will the following code output? let arr = [[1, 2], [3, 4]]; for (let i = 0; i < arr.length; i++) { for (let j = 0; j < arr[i].length; j++) { console.log(arr[i][j]); }}",
        options: ["1 2 3 4", "1 2 4", "2 3 4", "Error", "3 4 1 2"],
        answer: 0,
      },
    ],
  },

  /* python Quiz */
  python: {
    beginner: [
      {
        question: "What is the correct way to print 'Hello, World!' in Python?",
        options: [
          "print('Hello, World!')",
          "echo 'Hello, World!'",
          "console.log('Hello, World!')",
        ],
        answer: 0,
      },
      {
        question: "How do you write a comment in Python?",
        options: [
          "// This is a comment",
          "# This is a comment",
          "!-- This is a comment --",
        ],
        answer: 1,
      },
      {
        question: "What will this comment do? # This is a comment",
        options: [
          "It will print a message",
          "It will be ignored by the interpreter",
          "It will cause an error",
        ],
        answer: 1,
      },
      {
        question: "How do you create a string in Python?",
        options: ["string = 'Hello'", "string = Hello", 'string = "Hello"'],
        answer: 0,
      },
      {
        question: "How can you format a string in Python?",
        options: [
          "'Hello, {}'.format(name)",
          "f'Hello, {name}'",
          "Both A and B",
        ],
        answer: 2,
      },
      {
        question: "What is the output of 5 + 3?",
        options: ["8", "53", "Error"],
        answer: 0,
      },
      {
        question: "How do you convert a string to an integer?",
        options: ["int('5')", "str(5)", "float('5')"],
        answer: 0,
      },
      {
        question: "How can you get the current date in Python?",
        options: [
          "import datetime; datetime.datetime.now()",
          "datetime.now()",
          "get_date()",
        ],
        answer: 0,
      },
      {
        question: "What will the following code output? print(3 * 2 + 1)",
        options: ["7", "6", "8"],
        answer: 0,
      },
      {
        question: "How do you access the first character of a string?",
        options: ["string[0]", "string(0)", "string.first()"],
        answer: 0,
      },
    ],
    intermediate: [
      {
        question:
          "What is the output of the following code?\ntry:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print('Division by zero!')",
        options: ["1", "0", "Division by zero!", "Error"],
        answer: 2,
      },
      {
        question:
          "How do you check if a variable 'x' is greater than 10 and less than 20?",
        options: [
          "if x > 10 and x < 20:",
          "if 10 < x < 20:",
          "Both A and B",
          "if x > 10 or x < 20:",
        ],
        answer: 2,
      },
      {
        question:
          "What will the following code output?\nif True:\n    print('Yes')\nelse:\n    print('No')",
        options: ["Yes", "No", "Error", "None"],
        answer: 0,
      },
      {
        question: "How can you handle multiple exceptions in Python?",
        options: [
          "except (TypeError, ValueError):",
          "except TypeError or ValueError:",
          "except TypeError, ValueError:",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question:
          "What does the following code output?\n\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i)",
        options: ["0 1 2", "0 2", "1 2", "Error"],
        answer: 1,
      },
      {
        question:
          "Which of the following is a valid way to declare a list in Python?",
        options: ["list = ()", "list = []", "list = {}", "list = '<>'"],
        answer: 1,
      },
      {
        question:
          "What will the following code output?\n\nx = [1, 2, 3]\nif 2 in x:\n    print('Found')\nelse:\n    print('Not Found')",
        options: ["Found", "Not Found", "Error", "None"],
        answer: 0,
      },
      {
        question: "How do you create a dictionary in Python?",
        options: ["dict = []", "dict = {}", "dict = ()", "dict = '<>'"],
        answer: 1,
      },
      {
        question:
          "What will the following code output?\n\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)",
        options: ["0 1 2 3 4", "0 1 2", "0 1 2 3", "Error"],
        answer: 1,
      },
      {
        question:
          "How can you check if a string 's' contains the substring 'abc'?",
        options: [
          "if 'abc' in s:",
          "if s.contains('abc'):",
          "if 'abc' is s:",
          "None of the above",
        ],
        answer: 0,
      },
    ],
    advanced: [
      {
        question:
          "What is the output of the following code?\ndef greet(name='World'):\n    return f'Hello, {name}!'\nprint(greet())",
        options: ["Hello, World!", "Hello, !", "Error", "Hello, None!", "None"],
        answer: 0,
      },
      {
        question: "How do you import a specific function from a module?",
        options: [
          "import module.function",
          "from module import function",
          "import function from module",
          "require(module.function)",
          "None of the above",
        ],
        answer: 1,
      },
      {
        question: "What is the purpose of a virtual environment in Python?",
        options: [
          "To isolate project dependencies",
          "To enhance performance",
          "To manage global variables",
          "To compile Python code",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question: "Which command is used to create a new virtual environment?",
        options: [
          "python -m venv env",
          "create venv env",
          "virtualenv env",
          "python create env",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question:
          "How can you call an API in Python using the requests library?",
        options: [
          "requests.get('url')",
          "http.get('url')",
          "api.call('url')",
          "fetch('url')",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question: "What method is used to parse a JSON string in Python?",
        options: [
          "json.load()",
          "json.parse()",
          "json.loads()",
          "json.dumps()",
          "None of the above",
        ],
        answer: 2,
      },
      {
        question: "How can you access a value from a JSON object?",
        options: [
          "json['key']",
          "json.get('key')",
          "json.key",
          "Both A and B",
          "None of the above",
        ],
        answer: 3,
      },
      {
        question: "What is the purpose of the `__init__.py` file in a package?",
        options: [
          "To initialize a package",
          "To compile Python files",
          "To define variables",
          "To import modules",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question: "How can you manage sensitive keys in a Python application?",
        options: [
          "Hardcode them in the source code",
          "Use environment variables",
          "Store them in a public repository",
          "Include them in the README file",
          "None of the above",
        ],
        answer: 1,
      },
      {
        question:
          'What will the following code output?\nimport json\njson_data = \'{"name": "John", "age": 30}\'\ndata = json.loads(json_data)\nprint(data[\'name\'])',
        options: ["John", "30", "Error", "name", "None"],
        answer: 0,
      },
    ],
  },

  /* swift Quiz */
  swift: {
    beginner: [
      {
        question: "What is the keyword used to declare a variable in Swift?",
        options: ["let", "var", "const"],
        answer: 1,
      },
      {
        question: "What is the keyword used to declare a constant in Swift?",
        options: ["let", "var", "const"],
        answer: 0,
      },
      {
        question: "Which of the following is a valid type in Swift?",
        options: ["Int", "String", "Both A and B"],
        answer: 2,
      },
      {
        question: "What is the correct way to define a function in Swift?",
        options: [
          "func myFunction() {}",
          "function myFunction() {}",
          "def myFunction() {}",
        ],
        answer: 0,
      },
      {
        question:
          "What is the difference between a class and a struct in Swift?",
        options: [
          "Classes are reference types, structs are value types",
          "Structs are reference types, classes are value types",
          "There is no difference",
        ],
        answer: 0,
      },
      {
        question:
          "Which loop is used to iterate over a range of numbers in Swift?",
        options: ["for", "while", "repeat-while"],
        answer: 0,
      },
      {
        question: "What is an optional in Swift?",
        options: [
          "A type that can hold either a value or nil",
          "A type that must always hold a value",
          "A type that cannot hold nil",
        ],
        answer: 0,
      },
      {
        question: "How do you safely unwrap an optional in Swift?",
        options: [
          "Using if-let",
          "Using force unwrapping (!)",
          "Using nil coalescing (??)",
        ],
        answer: 0,
      },
      {
        question: "What is the purpose of an if-else statement in Swift?",
        options: [
          "To execute code based on a condition",
          "To define a function",
          "To declare a variable",
        ],
        answer: 0,
      },
      {
        question:
          "Which of the following is a valid way to declare a string in Swift?",
        options: [
          `let str = "Hello"`,
          `let str = 'Hello'`,
          `let str = /Hello/`,
        ],
        answer: 0,
      },
    ],
    intermediate: [
      {
        question: "What is the purpose of a guard statement in Swift?",
        options: [
          "To handle early returns",
          "To define a loop",
          "To declare a variable",
          "To create a class",
        ],
        answer: 0,
      },
      {
        question: "What is an enum in Swift?",
        options: [
          "A type that defines a group of related values",
          "A type that holds multiple values",
          "A type that represents a function",
          "A type that represents a loop",
        ],
        answer: 0,
      },
      {
        question: "What is the purpose of a protocol in Swift?",
        options: [
          "To define a blueprint of methods and properties",
          "To create a class",
          "To define a loop",
          "To declare a variable",
        ],
        answer: 0,
      },
      {
        question:
          "What is the difference between strong and weak references in Swift?",
        options: [
          "Strong references increase the reference count, weak references do not",
          "Weak references increase the reference count, strong references do not",
          "There is no difference",
          "Strong references are used for value types",
        ],
        answer: 0,
      },
      {
        question: "What is a closure in Swift?",
        options: [
          "A self-contained block of functionality",
          "A type of loop",
          "A type of class",
          "A type of struct",
        ],
        answer: 0,
      },
      {
        question:
          "Which method is used to append a string to another string in Swift?",
        options: ["append()", "add()", "insert()", "concat()"],
        answer: 0,
      },
      {
        question: "What is the correct way to declare an array in Swift?",
        options: [
          `var arr = [1, 2, 3]`,
          `var arr = (1, 2, 3)`,
          `var arr = {1, 2, 3}`,
          `var arr = <1, 2, 3>`,
        ],
        answer: 0,
      },
      {
        question:
          "What is the difference between Int, Float, and Double in Swift?",
        options: [
          "Int is for whole numbers, Float and Double are for decimals",
          "Float is for whole numbers, Int and Double are for decimals",
          "Double is for whole numbers, Int and Float are for decimals",
          "There is no difference",
        ],
        answer: 0,
      },
      {
        question: "What is the purpose of a dictionary in Swift?",
        options: [
          "To store key-value pairs",
          "To store ordered values",
          "To store functions",
          "To store loops",
        ],
        answer: 0,
      },
      {
        question:
          "Which of the following is a valid way to declare a dictionary in Swift?",
        options: [
          `var dict = ["key": "value"]`,
          `var dict = ("key": "value")`,
          `var dict = {"key": "value"}`,
          `var dict = <"key": "value">`,
        ],
        answer: 0,
      },
    ],
    advanced: [
      {
        question: "What is the purpose of libraries and frameworks in Swift?",
        options: [
          "To provide reusable code and functionality",
          "To define loops",
          "To declare variables",
          "To create classes",
          "To define protocols",
        ],
        answer: 0,
      },
      {
        question:
          "What is the recommended naming convention for variables in Swift?",
        options: [
          "camelCase",
          "PascalCase",
          "snake_case",
          "kebab-case",
          "UPPERCASE",
        ],
        answer: 0,
      },
      {
        question: "What is a type alias in Swift?",
        options: [
          "A way to give an existing type a new name",
          "A way to define a new type",
          "A way to create a loop",
          "A way to declare a variable",
          "A way to define a protocol",
        ],
        answer: 0,
      },
      {
        question: "What is the ternary operator in Swift?",
        options: [
          "A shorthand for an if-else statement",
          "A way to define a function",
          "A way to declare a variable",
          "A way to create a loop",
          "A way to define a protocol",
        ],
        answer: 0,
      },
      {
        question: "What is the purpose of the return statement in Swift?",
        options: [
          "To return a value from a function",
          "To define a loop",
          "To declare a variable",
          "To create a class",
          "To define a protocol",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is a math function in Swift?",
        options: [
          "sqrt()",
          "round()",
          "abs()",
          "All of the above",
          "None of the above",
        ],
        answer: 3,
      },
      {
        question:
          "What is the purpose of searching and sorting algorithms in Swift?",
        options: [
          "To efficiently find or organize data",
          "To define loops",
          "To declare variables",
          "To create classes",
          "To define protocols",
        ],
        answer: 0,
      },
      {
        question: "What is the purpose of wrapping up a project in Swift?",
        options: [
          "To finalize and organize the code",
          "To define loops",
          "To declare variables",
          "To create classes",
          "To define protocols",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is a valid type alias in Swift?",
        options: [
          "typealias StringArray = [String]",
          "typealias IntArray = [Int]",
          "typealias DoubleArray = [Double]",
          "All of the above",
          "None of the above",
        ],
        answer: 3,
      },
      {
        question: "What is the purpose of the ternary operator in Swift?",
        options: [
          "To simplify conditional logic",
          "To define loops",
          "To declare variables",
          "To create classes",
          "To define protocols",
        ],
        answer: 0,
      },
    ],
  },

  /* dart Quiz */
  dart: {
    beginner: [
      {
        question: "1. What is a Widget in Flutter?",
        options: [
          "A building block of the UI",
          "A type of data structure",
          "A programming language",
        ],
        answer: 0,
      },
      {
        question: "2. What is the purpose of the Scaffold widget?",
        options: [
          "To create a layout structure",
          "To display images",
          "To handle state management",
        ],
        answer: 0,
      },
      {
        question: "3. How do you define colors in Flutter?",
        options: [
          "Color.fromARGB()",
          "Color('#FFFFFF')",
          "Color(255, 255, 255)",
        ],
        answer: 0,
      },
      {
        question: "4. What does hot reload do?",
        options: [
          "Reloads the entire application",
          "Updates the UI without losing state",
          "Clears the cache",
        ],
        answer: 1,
      },
      {
        question: "5. How do you display an image from assets?",
        options: [
          "Image('assets/image.png')",
          "AssetImage('assets/image.png')",
          "NetworkImage('assets/image.png')",
        ],
        answer: 0,
      },
      {
        question: "6. What is the purpose of the Container widget?",
        options: [
          "To create a layout",
          "To hold a single child widget",
          "Both A and B",
        ],
        answer: 2,
      },
      {
        question: "7. How do you add padding in Flutter?",
        options: ["padding: 10", "Padding(10)", "EdgeInsets.all(10)"],
        answer: 2,
      },
      {
        question: "8. What widget is used for a button?",
        options: ["TextButton", "IconButton", "Both A and B"],
        answer: 2,
      },
      {
        question: "9. How do you create a Row in Flutter?",
        options: ["Row()", "Column()", "Stack()"],
        answer: 0,
      },
      {
        question: "10. What is the main purpose of the main() function?",
        options: ["To run the app", "To define variables", "To create the UI"],
        answer: 0,
      },
    ],
    intermediate: [
      {
        question: "1. How do you create a Column widget?",
        options: ["Column()", "Row()", "List()"],
        answer: 0,
      },
      {
        question: "2. What is the purpose of Expanded widget?",
        options: [
          "To fill available space",
          "To create a new route",
          "To display text",
        ],
        answer: 0,
      },
      {
        question: "3. What is a StatefulWidget?",
        options: [
          "A widget that can change state",
          "A static widget",
          "A widget without children",
        ],
        answer: 0,
      },
      {
        question: "4. How do you create a custom class in Dart?",
        options: ["class MyClass {}", "MyClass() {}", "class MyClass()"],
        answer: 0,
      },
      {
        question: "5. What widget can be used to create cards?",
        options: ["Card()", "Container()", "Box()"],
        answer: 0,
      },
      {
        question: "6. How do you extract a widget?",
        options: ["Create a new class", "Use a function", "Both A and B"],
        answer: 2,
      },
      {
        question: "7. What does it mean to pass functions as arguments?",
        options: [
          "Using a function as a parameter",
          "Calling a function",
          "Returning a function",
        ],
        answer: 0,
      },
      {
        question: "8. How do you navigate between routes?",
        options: ["Navigator.push()", "Route.push()", "Page.push()"],
        answer: 0,
      },
      {
        question: "9. What is a ListView?",
        options: [
          "A scrollable list",
          "A static list",
          "A collection of buttons",
        ],
        answer: 0,
      },
      {
        question: "10. How do you create a shortcut in Dart?",
        options: ["Using 'shortcut'", "Using 'var'", "Using 'typedef'"],
        answer: 2,
      },
    ],
    advanced: [
      {
        question: "1. What are Widget lifecycles?",
        options: [
          "Stages of widget creation",
          "Events in the app",
          "States of API calls",
          "None of the above",
          "All of the above",
        ],
        answer: 0,
      },
      {
        question: "2. How do you handle asynchronous operations in Dart?",
        options: [
          "Using async/await",
          "Using threads",
          "Using callbacks",
          "Using futures",
          "Both A and D",
        ],
        answer: 4,
      },
      {
        question: "3. What is a Flutter package?",
        options: [
          "A library of widgets",
          "A collection of assets",
          "A plugin for native features",
          "All of the above",
          "None of the above",
        ],
        answer: 3,
      },
      {
        question: "4. How do you format DateTime in Dart?",
        options: [
          "DateFormat.format()",
          "DateTime.format()",
          "DateTime.toString()",
          "DateFormat()",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question: "5. What is the purpose of handling errors in Flutter?",
        options: [
          "To prevent app crashes",
          "To log errors",
          "To show error messages",
          "All of the above",
          "None of the above",
        ],
        answer: 3,
      },
      {
        question: "6. How do you pass data between routes?",
        options: [
          "Using constructor arguments",
          "Using global variables",
          "Using state management",
          "All of the above",
          "None of the above",
        ],
        answer: 3,
      },
      {
        question: "7. What is a spinner in Flutter?",
        options: [
          "A loading indicator",
          "A button",
          "A type of widget",
          "A stateful widget",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question: "8. How do you use a ternary operator in Dart?",
        options: [
          "condition ? trueValue : falseValue",
          "if(condition) trueValue else falseValue",
          "trueValue if condition else falseValue",
          "None of the above",
          "All of the above",
        ],
        answer: 0,
      },
      {
        question: "9. What is the purpose of ListView.builder?",
        options: [
          "To create a simple list",
          "To create a dynamic list",
          "To create a static list",
          "To create a grid",
          "None of the above",
        ],
        answer: 1,
      },
      {
        question: "10. How do you update the location in Flutter?",
        options: [
          "Using Geolocation API",
          "Using maps",
          "Using GPS",
          "Using Flutter packages",
          "All of the above",
        ],
        answer: 0,
      },
    ],
  },

  /* react Quiz */
  react: {
    beginner: [
      {
        question: "What is React Native primarily used for?",
        options: [
          "Web Development",
          "Mobile App Development",
          "Desktop App Development",
        ],
        answer: 1,
      },
      {
        question: "Which command is used to create a new React Native app?",
        options: ["create-react-app", "react-native init", "npm start"],
        answer: 1,
      },
      {
        question: "Which component is used to display text in React Native?",
        options: ["< View >", "< Text >", "< Style >"],
        answer: 1,
      },
      {
        question:
          "What is the purpose of the `StyleSheet` component in React Native?",
        options: [
          "To manage state",
          "To define styles",
          "To handle user input",
        ],
        answer: 1,
      },
      {
        question:
          "Which hook is used to manage state in a functional component?",
        options: ["useEffect", "useState", "useContext"],
        answer: 1,
      },
      {
        question: "What is the primary purpose of the `TextInput` component?",
        options: [
          "To display text",
          "To handle user input",
          "To create buttons",
        ],
        answer: 1,
      },
      {
        question:
          "Which component is used to create a scrollable list in React Native?",
        options: ["< ScrollView >", "< FlatList >", "< ListView >"],
        answer: 1,
      },
      {
        question: "What is the purpose of the `FlatList` component?",
        options: [
          "To display a static list",
          "To render a large list efficiently",
          "To create a grid layout",
        ],
        answer: 1,
      },
      {
        question: "Which component is used to make an element touchable?",
        options: ["< TouchableOpacity >", "< Button >", "< Pressable >"],
        answer: 0,
      },
      {
        question:
          "What is the purpose of the `Alert` component in React Native?",
        options: [
          "To display a modal",
          "To show a notification",
          "To display a popup message",
        ],
        answer: 2,
      },
    ],
    intermediate: [
      {
        question: "How can you dismiss the keyboard in React Native?",
        options: [
          "Keyboard.dismiss()",
          "Keyboard.hide()",
          "Keyboard.remove()",
          "Keyboard.close()",
        ],
        answer: 0,
      },
      {
        question: "What is the primary purpose of Flexbox in React Native?",
        options: [
          "To handle state",
          "To manage layout and alignment",
          "To create animations",
          "To handle user input",
        ],
        answer: 1,
      },
      {
        question:
          "Which library is commonly used to add icons in React Native?",
        options: [
          "react-native-icons",
          "react-native-vector-icons",
          "react-native-fontawesome",
          "react-native-material-icons",
        ],
        answer: 1,
      },
      {
        question:
          "What is the purpose of the `Reviews App` in the context of React Native?",
        options: [
          "To manage state",
          "To demonstrate navigation",
          "To create a todo list",
          "To handle form validation",
        ],
        answer: 1,
      },
      {
        question: "How do you add custom fonts in React Native?",
        options: [
          "Using `react-native-fonts`",
          "By linking the font files manually",
          "Using `expo-font`",
          "Both B and C",
        ],
        answer: 3,
      },
      {
        question: "What is the purpose of `Global Styles` in React Native?",
        options: [
          "To define styles that can be used across the entire app",
          "To manage state globally",
          "To handle navigation",
          "To create animations",
        ],
        answer: 0,
      },
      {
        question:
          "Which library is commonly used for navigation in React Native?",
        options: [
          "react-navigation",
          "react-router-native",
          "react-native-navigation",
          "react-native-router",
        ],
        answer: 0,
      },
      {
        question:
          "What is the purpose of the `Stack Navigator` in React Navigation?",
        options: [
          "To create a stack of screens",
          "To manage state",
          "To handle user input",
          "To create a drawer menu",
        ],
        answer: 0,
      },
      {
        question: "How do you pass data between screens in React Navigation?",
        options: [
          "Using `props`",
          "Using `state`",
          "Using `route.params`",
          "Using `context`",
        ],
        answer: 2,
      },
      {
        question:
          "What is the purpose of `Drawer Navigation` in React Navigation?",
        options: [
          "To create a side menu",
          "To manage state",
          "To handle user input",
          "To create a stack of screens",
        ],
        answer: 0,
      },
    ],
    advanced: [
      {
        question:
          "What is the primary purpose of a `Custom Header Component` in React Native?",
        options: [
          "To manage state",
          "To create a reusable header",
          "To handle navigation",
          "To create animations",
          "To handle user input",
        ],
        answer: 1,
      },
      {
        question:
          "How do you create a `Custom Card Component` in React Native?",
        options: [
          "By using `View` and `Text` components",
          "By using `StyleSheet` for styling",
          "By using `TouchableOpacity` for interaction",
          "By combining all of the above",
          "By using `FlatList`",
        ],
        answer: 3,
      },
      {
        question: "What is the best way to use images in React Native?",
        options: [
          "Using the `<Image>` component",
          "Using `require()` for local images",
          "Using `uri` for remote images",
          "All of the above",
          "None of the above",
        ],
        answer: 3,
      },
      {
        question: "How do you set a background image in React Native?",
        options: [
          "Using `ImageBackground` component",
          "Using `StyleSheet` with `backgroundImage`",
          "Using `View` with `backgroundColor`",
          "Using `FlatList`",
          "None of the above",
        ],
        answer: 0,
      },
      {
        question: "What is the purpose of a `Modal` in React Native?",
        options: [
          "To display a popup",
          "To handle navigation",
          "To manage state",
          "To create animations",
          "To handle user input",
        ],
        answer: 0,
      },
      {
        question: "What is Formik used for in React Native?",
        options: [
          "To manage state",
          "To handle form management",
          "To create animations",
          "To handle navigation",
          "To display images",
        ],
        answer: 1,
      },
      {
        question: "What is Yup commonly used for in React Native?",
        options: [
          "Form validation",
          "State management",
          "Navigation",
          "Styling",
          "Handling images",
        ],
        answer: 0,
      },
      {
        question: "How do you show form errors in React Native using Formik?",
        options: [
          "Using `ErrorMessage` component",
          "Using `setErrors` method",
          "Using `validationSchema`",
          "Using `handleSubmit`",
          "All of the above",
        ],
        answer: 4,
      },
      {
        question:
          "What is the purpose of a `Custom Button Component` in React Native?",
        options: [
          "To manage state",
          "To create a reusable button",
          "To handle navigation",
          "To create animations",
          "To handle user input",
        ],
        answer: 1,
      },
      {
        question:
          "What is the final step in wrapping up a React Native project?",
        options: [
          "Testing",
          "Deploying",
          "Documenting",
          "Optimizing",
          "All of the above",
        ],
        answer: 4,
      },
    ],
  },
};

const urlParams = new URLSearchParams(window.location.search);
const language = urlParams.get("language");
const level = urlParams.get("level");

const quizTitle = document.getElementById("quiz-title");
const quizContainer = document.getElementById("quiz-container");
// java - biginner quiz h1
quizTitle.textContent = `${language.toUpperCase()} - ${
  level.charAt(0).toUpperCase() + level.slice(1)
} Quiz`;

const questions = quizzes[language][level];

questions.forEach((quiz, index) => {
  const questionElement = document.createElement("div");
  questionElement.innerHTML = `<p>${index + 1}. ${quiz.question}</p>`;
  quiz.options.forEach((option, i) => {
    const optionElement = document.createElement("label");
    optionElement.innerHTML = `<input type="radio" name="question${index}" value="${i}"> ${option}<br>`;
    questionElement.appendChild(optionElement);
  });
  quizContainer.appendChild(questionElement);
});

function submitQuiz() {
  let score = 0;
  questions.forEach((quiz, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    const questionElement = quizContainer.children[index]; // Get the question div

    const existingFeedback = questionElement.querySelector(".feedback");

    if (selectedOption && parseInt(selectedOption.value) === quiz.answer) {
      score++; // Increment score if the answer is correct
    } else {
      // Highlight the incorrect answer
      questionElement.style.color = "red"; // Change text color to red for incorrect questions

      if (!existingFeedback) {
        const correctAnswer = quiz.options[quiz.answer];
        const feedback = document.createElement("p");
        feedback.textContent = `Correct answer: ${correctAnswer}`;
        feedback.style.color = "green"; // Set correct answer color to green
        feedback.style.fontWeight = "bold"; // Make correct answer bold
        feedback.classList.add("feedback"); // Add a class to identify feedback
        questionElement.appendChild(feedback); // Append feedback to the question
      }
    }
  });

  // Display the final score
  alert(`You scored ${score} out of ${questions.length}`);
}
