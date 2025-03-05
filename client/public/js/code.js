const tasks = {
  javas: {
    beginner: {
      task:
        "Write a simple JavaScript program that does the following:\n" +
        "1. Outputs 'Hello, World!' to the console.\n" +
        "2. Prompts the user for their name and then greets them with 'Hello, [Name]!'.\n" +
        "3. Demonstrates the use of variables and string concatenation.",
      solution: `// Output 'Hello, World!' to the console
console.log('Hello, World!');

// Get user input for their name
let userName = prompt('Please enter your name:');

// Greet the user
console.log('Hello, ' + userName + '!');`,
    },
    intermediate: {
      task:
        "Create a simple JavaScript program that implements a basic calculator with the following features:\n" +
        "1. Prompts the user to enter two numbers.\n" +
        "2. Asks the user to choose an operation: addition, subtraction, multiplication, or division.\n" +
        "3. Displays the result of the operation using an alert.\n" +
        "4. Use functions to perform the calculations.",
      solution: `// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero!';
    }
    return a / b;
}

// Get user input
let num1 = parseFloat(prompt('Enter the first number:'));
let num2 = parseFloat(prompt('Enter the second number:'));

// Ask for operation
let operation = prompt('Choose an operation: +, -, *, /');

// Initialize result variable
let result;

// Perform calculation based on user choice
switch (operation) {
    case '+':
        result = add(num1, num2);
        break;
    case '-':
        result = subtract(num1, num2);
        break;
    case '*':
        result = multiply(num1, num2);
        break;
    case '/':
        result = divide(num1, num2);
        break;
    default:
        result = 'Invalid operation!';
}

// Display the result
alert('The result is: ' + result);`,
    },
    advanced: {
      task:
        "Create a multiple-choice quiz application with the following features:\n" +
        "1. Use an array of objects to store quiz questions, options, and the correct answer.\n" +
        "2. Display each question with its options in the console.\n" +
        "3. Use a for loop to iterate through the questions and a while loop to allow the user to answer until they choose to stop.\n" +
        "4. Implement a password checker before starting the quiz.\n" +
        "5. Store the user's score in web storage after the quiz ends.",
      solution: `// Array of quiz questions
const quizQuestions = [
    { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
    { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Jupiter' }
];

// Function to check password
function checkPassword() {
    const password = prompt('Enter the password to start the quiz:');
    return password === 'admin123'; // Example password
}

// Start quiz if password is correct
if (checkPassword()) {
    let score = 0;
    let i = 0;

    while (i < quizQuestions.length) {
        const q = quizQuestions[i];
        console.log(q.question);
        
        q.options.forEach((option, index) => {
            console.log((index + 1) + ': ' + option);
        });

        const userAnswer = prompt('Choose the number of your answer or type "exit" to stop:');
        
        if (userAnswer.toLowerCase() === 'exit') {
            break;
        }

        if (q.options[userAnswer - 1] === q.answer) {
            console.log('Correct!');
            score++;
        } else {
            console.log('Wrong! The correct answer is ' + q.answer);
        }
        i++;
    }

    // Store score in web storage
    localStorage.setItem('quizScore', score);
    console.log('Your final score is: ' + score + '/' + quizQuestions.length);
} else {
    console.log('Incorrect password. Access denied.');
}`,
    },
  },
  python: {
    beginner: {
      task:
        "Write a Python program that does the following:\n" +
        "1. Print 'Hello, World!' to the console.\n" +
        "2. Use comments to explain what each part of the code does.\n" +
        "3. Create a string variable that contains your name.\n" +
        "4. Format a string to greet the user with their name.\n" +
        "5. Perform a simple calculation (e.g., add two numbers) and print the result.\n" +
        "6. Print the current date using the datetime module.",
      solution: `import datetime  # Import the datetime module

# Print 'Hello, World!'
print('Hello, World!')

# Create a string variable with your name
name = 'Your Name'  # Replace 'Your Name' with your actual name

# Format a string to greet the user
greeting = f'Hello, {name}!'  # Using f-string for formatting
print(greeting)

# Perform a simple calculation
number1 = 5  # First number
number2 = 3  # Second number
result = number1 + number2  # Add the two numbers
print('The result of adding', number1, 'and', number2, 'is:', result)

# Print the current date
current_date = datetime.datetime.now()  # Get the current date and time
print('Current date and time:', current_date)`,
    },
    intermediate: {
      task:
        "Write a Python program that does the following:\n" +
        "1. Create a list of numbers.\n" +
        "2. Use a loop to iterate through the list and check each number.\n" +
        "3. Handle possible exceptions (e.g., converting a string to an integer).\n" +
        "4. Use conditions to classify numbers as even or odd.\n" +
        "5. Implement multi-condition checks to find numbers greater than 10.\n" +
        "6. Store even and odd numbers in separate collections (lists).",
      solution: `numbers = ['1', '2', '3', '10', '15', 'abc', '20']  # List of numbers (with a string error case)
even_numbers = []  # List to store even numbers
odd_numbers = []   # List to store odd numbers

for num in numbers:
    try:
        value = int(num)  # Convert string to integer
        if value > 10:  # Check if the number is greater than 10
            if value % 2 == 0:  # Check if the number is even
                even_numbers.append(value)  # Add to even numbers
            else:
                odd_numbers.append(value)  # Add to odd numbers
    except ValueError:
        print(f'Cannot convert {num} to an integer.')  # Handle conversion error

print('Even numbers:', even_numbers)
print('Odd numbers:', odd_numbers)`,
    },
    advanced: {
      task:
        "Write a Python program that does the following:\n" +
        "1. Create a function that accepts parameters for an API endpoint and an optional header.\n" +
        "2. Call an API and handle exceptions if the call fails.\n" +
        "3. Parse the JSON response and extract specific data.\n" +
        "4. Use a virtual environment to manage dependencies (just mention this in comments).\n" +
        "5. Include comments to explain each part of the code.",
      solution: `import requests  # Import the requests module

# Function to call an API
def fetch_data(api_endpoint, headers=None):
    try:
        response = requests.get(api_endpoint, headers=headers)  # Call the API
        response.raise_for_status()  # Raise an error for bad responses
        return response.json()  # Return the JSON response
    except requests.exceptions.RequestException as e:
        print(f'Error occurred: {e}')  # Handle request errors
        return None

# Example usage of the function
if __name__ == '__main__':
    # Specify your API endpoint and optional headers
    api_url = 'https://api.example.com/data'  # Replace with a real API endpoint
    api_headers = {'Authorization': 'Bearer your_token'}  # Replace with your actual token

    # Fetch data from the API
    data = fetch_data(api_url, api_headers)
    
    if data:  # Check if data was retrieved successfully
        # Extract specific data from the JSON response
        key_data = data.get('key')  # Replace 'key' with the actual key in the response
        print('Extracted Data:', key_data)

# Note: To manage dependencies, create a virtual environment using "python -m venv env" and activate it.`,
    },
  },
  dart: {
    beginner: {
      task:
        "Write a Dart program that does the following:\n" +
        "1. Create a basic Flutter app with a Scaffold widget.\n" +
        "2. Set the app's theme color and font.\n" +
        "3. Use a Container widget to display an image from assets.\n" +
        "4. Include a Row widget containing buttons and an icon.\n" +
        "5. Use padding and margin to style the widgets.",
      solution: `import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Beginner Dart App',
      theme: ThemeData(
        primaryColor: Colors.blue,
        fontFamily: 'Arial',
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Beginner Dart App'),
        ),
        body: Center(
          child: Container(
            padding: EdgeInsets.all(20),
            margin: EdgeInsets.all(10),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset('assets/image.png'), // Replace with your image asset
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ElevatedButton(
                      onPressed: () {},
                      child: Text('Button 1'),
                    ),
                    Icon(Icons.star),
                    ElevatedButton(
                      onPressed: () {},
                      child: Text('Button 2'),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}`,
    },
    intermediate: {
      task:
        "Write a Dart program that does the following:\n" +
        "1. Create a StatefulWidget that manages a list of data.\n" +
        "2. Use a Column widget to display the list.\n" +
        "3. Create a custom class for the data model.\n" +
        "4. Use a Card widget to display each item in the list.\n" +
        "5. Implement a function that adds items to the list when a button is pressed.",
      solution: `import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class Item {
  final String name;
  Item(this.name);
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final List<Item> items = [];

  void addItem() {
    setState(() {
      items.add(Item('Item {items.length + 1}'));
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Mid-Level Dart App')),
        body: Column(
          children: [
            ElevatedButton(
              onPressed: addItem,
              child: Text('Add Item'),
            ),
            Expanded(
              child: ListView.builder(
                itemCount: items.length,
                itemBuilder: (context, index) {
                  return Card(
                    child: ListTile(
                      title: Text(items[index].name),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}`,
    },
    advanced: {
      task:
        "Write a Dart program that does the following:\n" +
        "1. Create a Flutter app that fetches data from an API asynchronously.\n" +
        "2. Use a StatefulWidget to manage the state.\n" +
        "3. Format and display the fetched data.\n" +
        "4. Handle errors gracefully.\n" +
        "5. Use a ListView.builder to display the data items dynamically.",
      solution: `import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  List<dynamic> data = [];
  bool isLoading = true;
  String errorMessage = '';

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  Future<void> fetchData() async {
    try {
      final response = await http.get(Uri.parse('https://api.example.com/data')); // Replace with a real API
      if (response.statusCode == 200) {
        setState(() {
          data = json.decode(response.body);
          isLoading = false;
        });
      } else {
        throw Exception('Failed to load data');
      }
    } catch (e) {
      setState(() {
        errorMessage = e.toString();
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Advanced Dart App')),
        body: isLoading
            ? Center(child: CircularProgressIndicator())
            : errorMessage.isNotEmpty
                ? Center(child: Text('Error: $errorMessage'))
                : ListView.builder(
                    itemCount: data.length,
                    itemBuilder: (context, index) {
                      return ListTile(
                        title: Text(data[index]['name']), // Adjust based on API response
                      );
                    },
                  ),
      ),
    );
  }
}`,
    },
  },
  react: {
    beginner: {
      task: "Create a React Native app that displays 'Hello, World!' using the `< Text >` component.",
      solution: `import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    < View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <  Text>Hello, World!</Text>
    < /View>
  );
}`,
    },
    intermediate: {
      task: "Create a React Native app that takes a user's name as input and displays a greeting message using `TextInput` and `useState`.",
      solution: `import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    < View style={styles.container}>
      < TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      < Text>Hello, {name}!</Text>
    < /View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
});`,
    },
    advanced: {
      task: "Create a React Native app with a custom header component, a custom card component, and a modal that opens when a button is pressed.",
      solution: `import React, { useState } from react;
import { View, Text, Button, Modal, StyleSheet } from react-native;

const CustomHeader = () => (
  < View style={styles.header} >
    < Text style={styles.headerText} >My App< / Text >
  </View>
);

const CustomCard = ({ title, description }) => (
  < View style= { styles.card } >
    < Text style={styles.cardTitle} >{ title }< /Text >
    < Text >{description}< /Text >
  < /View  >
);

export default function App() {
  const [ modalVisible, setModalVisible  ] = useState(false);

  return (
    < View style={styles.container}>
      < CustomHeader />
      < CustomCard title="Welcome" description="This is a custom card component." />
      < Button title="Open Modal" onPress={() => setModalVisible(true)} />
      < Modal visible={modalVisible} animationType="slide">
        < View style={styles.modal}>
          < Text>This is a modal!</Text>
          < Button title="Close" onPress={() => setModalVisible(false)} />
        < /View>
      < /Modal>
    < /View>
  );
}

`,
    },
  },
  java: {
    beginner: {
      task:
        "Write a Java program that covers the following concepts: \n" +
        "1. Declare variables for the number of items and total price. \n" +
        "2. Use Scanner to input the number of items. \n" +
        "3. Create an array for item prices and calculate total and average prices. \n" +
        "4. Use an increment operator to count processed items. \n" +
        "5. Check if the average price is greater than 50 and print a message. \n" +
        "6. Check if the average price is under 100 and total price is under 1000. \n" +
        "7. Allow the user to select a discount (1-3) and apply it. \n" +
        "8. Use a while loop to process item prices and increment a counter. \n" +
        "9. Store item prices in an array and display them after processing.",
      solution: `import java.util.Scanner;

public class ComprehensiveJavaProgram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Variables and types
        int numberOfItems;
        double totalPrice = 0.0;

        // User input
        System.out.print("Enter the number of items: ");
        numberOfItems = scanner.nextInt();

        // Array to hold prices
        double[] prices = new double[numberOfItems];

        // Get prices from user
        for (int i = 0; i < numberOfItems; i++) {
            System.out.print("Enter the price of item " + (i + 1) + ": ");
            prices[i] = scanner.nextDouble();
            totalPrice += prices[i]; // Math and arithmetic operators
        }

        // Calculate average price
        double averagePrice = totalPrice / numberOfItems;
        System.out.println("Total Price: " + totalPrice);
        System.out.println("Average Price: " + averagePrice);

        // Increment operator
        int count = 0;
        while (count < numberOfItems) {
            count++; // Increment operator
        }
        System.out.println("Count of items processed: " + count);

        // IF...ELSE statements and relational operators
        if (averagePrice > 50) {
            System.out.println("The average price is high.");
        } else {
            System.out.println("The average price is reasonable.");
        }

        // Logical operator
        if (averagePrice < 100 && totalPrice < 1000) {
            System.out.println("Prices are within acceptable limits.");
        } else {
            System.out.println("Prices exceed acceptable limits.");
        }

        // Switch statement
        System.out.print("Enter a number (1-3) to select a discount type: ");
        int discountType = scanner.nextInt();
        switch (discountType) {
            case 1:
                System.out.println("You selected a 10% discount.");
                totalPrice *= 0.90; // Apply discount
                break;
            case 2:
                System.out.println("You selected a 20% discount.");
                totalPrice *= 0.80; // Apply discount
                break;
            case 3:
                System.out.println("You selected a 30% discount.");
                totalPrice *= 0.70; // Apply discount
                break;
            default:
                System.out.println("No discount selected.");
                break;
        }

        // Final total price
        System.out.println("Final Total Price: " + totalPrice);

        // Closing the scanner
        scanner.close();
    }
}`,
    },
    intermediate: {
      task:
        "Write a Java program that includes the following concepts: \n" +
        "1. Use various string methods (e.g., length(), substring(), indexOf(), toUpperCase(), toLowerCase()). \n" +
        "2. Implement a recursive method to calculate the factorial of a number. \n" +
        "3. Create and manipulate collections using ArrayList and LinkedList. \n" +
        "4. Instantiate an ArrayList, add elements, and access them. \n" +
        "5. Instantiate a LinkedList, add elements, and access them. \n" +
        "6. Convert the ArrayList to an array and print the elements. \n" +
        "7. Use Collections.sort() to sort the ArrayList. \n" +
        "8. Demonstrate Collections.reverse() and Collections.copy() with your collections. \n" +
        "9. Use Collections.fill() to fill the ArrayList with a specific value.",
      solution: `import java.util.*;

public class IntermediateJavaProgram {
    public static void main(String[] args) {
        // Common String Methods
        String sample = "Hello, World!";
        System.out.println("Original String: " + sample);
        System.out.println("Length: " + sample.length());
        System.out.println("Substring (0-5): " + sample.substring(0, 5));
        System.out.println("Index of 'W': " + sample.indexOf('W'));
        System.out.println("Uppercase: " + sample.toUpperCase());
        System.out.println("Lowercase: " + sample.toLowerCase());

        // Recursion: Factorial
        int number = 5;
        System.out.println("Factorial of " + number + ": " + factorial(number));

        // ArrayList
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Cherry");
        System.out.println("ArrayList: " + arrayList);

        // LinkedList
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("Dog");
        linkedList.add("Cat");
        linkedList.add("Mouse");
        System.out.println("LinkedList: " + linkedList);

        // Convert Lists to Arrays
        String[] arrayFromList = new String[arrayList.size()];
        arrayList.toArray(arrayFromList);
        System.out.println("Array from ArrayList: " + Arrays.toString(arrayFromList));

        // Collections Method sort
        Collections.sort(arrayList);
        System.out.println("Sorted ArrayList: " + arrayList);

        // Methods reverse and copy
        ArrayList<String> copiedList = new ArrayList<>(arrayList);
        Collections.reverse(copiedList);
        System.out.println("Reversed Copied List: " + copiedList);

        // Collections Method fill
        Collections.fill(arrayList, "Fruit");
        System.out.println("Filled ArrayList: " + arrayList);
    }

    // Recursive method to calculate factorial
    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
}`,
    },
    advanced: {
      task:
        "Write a Java program that includes the following concepts: \n" +
        "1. Implement both single and multilevel inheritance. \n" +
        "2. Use interfaces to demonstrate multiple inheritance. \n" +
        "3. Utilize 'this' and 'super' keywords in constructors. \n" +
        "4. Override a method in a subclass. \n" +
        "5. Create your own package and import it. \n" +
        "6. Demonstrate public, private, protected, and default access. \n" +
        "7. Show method overloading and overriding. \n" +
        "8. Use runtime polymorphism to call overridden methods. \n" +
        "9. Use the final keyword for classes and methods. \n" +
        "10. Override equals(), toString(), and hashCode() methods.",
      solution: `import java.util.Objects;

// Create a package
package mypackage;

// Base class
class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    void sound() {
        System.out.println(name + " makes a sound.");
    }

    @Override
    public String toString() {
        return "Animal: " + name;
    }
}

// Single Inheritance
class Dog extends Animal {
    Dog(String name) {
        super(name);
    }

    @Override
    void sound() {
        System.out.println(name + " barks.");
    }
}

// Multilevel Inheritance
class Puppy extends Dog {
    Puppy(String name) {
        super(name);
    }

    @Override
    void sound() {
        System.out.println(name + " yips.");
    }
}

// Interface for multiple inheritance
interface Pet {
    void play();
}

// Class implementing multiple inheritance
class Cat extends Animal implements Pet {
    Cat(String name) {
        super(name);
    }

    @Override
    void sound() {
        System.out.println(name + " meows.");
    }

    @Override
    public void play() {
        System.out.println(name + " is playing.");
    }
}

// Final class
final class FinalAnimal {
    void display() {
        System.out.println("This is a final class.");
    }
}

public class AdvancedJavaProgram {
    public static void main(String[] args) {
        Animal dog = new Dog("Buddy");
        dog.sound();

        Animal puppy = new Puppy("Max");
        puppy.sound();

        Animal cat = new Cat("Whiskers");
        cat.sound();
        ((Cat) cat).play(); // Casting to call play()

        // Dynamic Method Dispatch
        Animal myAnimal = new Dog("Charlie");
        myAnimal.sound(); // Calls Dog's sound method

        // Using 'this' and 'super'
        System.out.println(dog.toString());
        System.out.println(cat.toString());

        // Final Keyword Usage
        FinalAnimal finalAnimal = new FinalAnimal();
        finalAnimal.display();
    }

    // Overriding equals and hashCode
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Animal)) return false;
        Animal animal = (Animal) obj;
        return Objects.equals(name, animal.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}`,
    },
  },
  swift: {
    beginner: {
      task: "Write a Swift program that declares a variable to store your name and a constant to store your age. Then, print a message that says, 'Hello, my name is [name] and I am [age] years old.",
      solution: `let name = "John"
let age = 25
print("Hello, my name is \\(name) and I am \\(age) years old.")`,
    },
    intermediate: {
      task: "Write a Swift program that uses a guard statement to check if a number is greater than 10. If it is, print 'Valid number'. Otherwise, print 'Invalid number.",
      solution: `func checkNumber(_ number: Int) {
  guard number > 10 else {
    print("Invalid number")
    return
  }
  print("Valid number")
}

checkNumber(15) // Valid number
checkNumber(5)  // Invalid number
  }
}`,
    },
    advanced: {
      task: "Write a Swift program that implements a function to sort an array of integers using the bubble sort algorithm. The function should take an array as input and return the sorted array.",
      solution: `func bubbleSort(_ array: [Int]) -> [Int] {
  var sortedArray = array
  for i in 0 .. < sortedArray.count {
    for j in 1..< sortedArray.count - i {
      if sortedArray[j] < sortedArray[j - 1] {
        sortedArray.swapAt(j, j - 1)
      }
    }
  }
  return sortedArray
}

let unsortedArray = [64, 34, 25, 12, 22, 11, 90]
let sortedArray = bubbleSort(unsortedArray)
print("Sorted array: \\(sortedArray)")
  }
}`,
    },
  },
};

let selectedLanguage = null;
let selectedLevel = null;

function selectLanguage(language) {
  selectedLanguage = language;
  renderLevels();
}

function selectLevel(level) {
  selectedLevel = level;
  renderTask();
}

function renderLevels() {
  const taskContainer = document.getElementById("task-container");
  taskContainer.innerHTML = `
    <h3>Choose a Level</h3>
    <div class="level-buttons">
      <button onclick="selectLevel('beginner')">Beginner</button>
      <button onclick="selectLevel('intermediate')">Intermediate</button>
      <button onclick="selectLevel('advanced')">Advanced</button>
    </div>
  `;
  updateLevelColors(selectedLanguage);
}

function renderTask() {
  const taskContainer = document.getElementById("task-container");
  const solutionContainer = document.getElementById("solution-container");
  const task = tasks[selectedLanguage][selectedLevel].task;
  const solution = tasks[selectedLanguage][selectedLevel].solution;

  taskContainer.innerHTML = `
    <h3>Task</h3>
    <pre>${task}</pre>
  `;

  solutionContainer.innerHTML = `
    <h3>Solution</h3>
    <pre>${solution}</pre>
  `;
  solutionContainer.style.display = "none"; // Hide solution initially
}

function toggleSolution() {
  const solutionContainer = document.getElementById("solution-container");
  if (solutionContainer.style.display === "none") {
    solutionContainer.style.display = "block";
  } else {
    solutionContainer.style.display = "none";
  }
}

const languageColors = {
  java: "#007396", // Java blue
  react: "#61dafb", // React blue
  javascript: "#f7df1e", // JavaScript yellow
  swift: "#ffac45", // Swift orange
  dart: "#00b4ab", // Dart teal
  python: "#3776ab", // Python blue
};

function selectLanguage(language) {
  selectedLanguage = language;
  updateLevelColors(language);
  renderLevels();
}

function updateLevelColors(language) {
  const levelButtons = document.querySelectorAll(".level-buttons button");
  const color = languageColors[language];

  levelButtons.forEach((button) => {
    button.style.backgroundColor = color;
    button.style.borderColor = color;
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = darkenColor(color, 20); // Darken on hover
    });
    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = color; // Restore original color
    });
  });
}

function darkenColor(color, percent) {
  // Helper function to darken a color
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
}
