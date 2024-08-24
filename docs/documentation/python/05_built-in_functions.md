# 05 - Python Built-in Functions

## Overview

Python, a versatile and widely-used programming language, comes equipped with a robust set of built-in functions. These functions are an essential part of Python, as they allow developers to perform common tasks efficiently without the need to import additional libraries. As of Python 3.11, there are approximately 70 built-in functions available. Understanding these functions is crucial for any Python programmer, as they form the foundation for more complex coding tasks and help in writing concise, readable, and efficient code.

### Importance of Understanding Built-in Functions

1. **Efficiency**: Built-in functions are optimized and written in C, making them faster than custom implementations.
2. **Readability**: Using built-in functions makes code more readable and easier to understand, as they are widely recognized by the Python community.
3. **Maintainability**: Code that relies on built-in functions is often easier to maintain and update.
4. **Reduced Complexity**: By leveraging these functions, you can minimize the complexity of your code, focusing more on solving the problem rather than reinventing the wheel.

---

## Categories of Built-in Functions

### 1. Type Conversion Functions
**Purpose**: Convert values from one type to another.

- **`int()`**: Converts a value to an integer.
- **`float()`**: Converts a value to a floating-point number.
- **`complex()`**: Converts a value to a complex number.
- **`str()`**: Converts a value to a string.
- **`repr()`**: Returns a string representation of an object.
- **`bool()`**: Converts a value to a boolean.
- **`list()`**: Converts a value to a list.
- **`dict()`**: Converts a value to a dictionary.
- **`set()`**: Converts a value to a set.
- **`tuple()`**: Converts a value to a tuple.
- **`frozenset()`**: Converts a value to a frozenset.
- **`chr()`**: Converts an integer to a Unicode character.
- **`ord()`**: Converts a character to its Unicode code.
- **`bin()`**: Converts an integer to a binary string.
- **`oct()`**: Converts an integer to an octal string.
- **`hex()`**: Converts an integer to a hexadecimal string.
- **`bytes()`**: Converts a value to a bytes object.
- **`bytearray()`**: Converts a value to a bytearray object.
- **`memoryview()`**: Creates a memory view object from a bytes-like object.

### 2. Sequence and Collection Manipulation Functions
**Purpose**: Perform operations on sequences (lists, tuples, strings) and collections (sets, dictionaries).

- **`len()`**: Returns the length of an object.
- **`min()`**: Returns the smallest item in an iterable.
- **`max()`**: Returns the largest item in an iterable.
- **`sum()`**: Returns the sum of all items in an iterable.
- **`sorted()`**: Returns a sorted list from an iterable.
- **`reversed()`**: Returns a reversed iterator for a sequence.
- **`enumerate()`**: Returns an enumerate object, which yields pairs of index and value.
- **`zip()`**: Returns an iterator that aggregates elements from multiple iterables.
- **`map()`**: Applies a function to all items in an iterable.
- **`filter()`**: Filters elements in an iterable based on a function.
- **`reduce()`**: Applies a rolling computation to sequential pairs of values in an iterable (from `functools` module).

### 3. Mathematical and Numeric Functions
**Purpose**: Execute basic mathematical operations.

- **`abs()`**: Returns the absolute value of a number.
- **`round()`**: Rounds a floating-point number to the nearest integer.
- **`divmod()`**: Returns a pair of quotient and remainder.
- **`pow()`**: Returns the value of a number raised to a power.
- **`sum()`**: Sums items of an iterable (optional start value).
- **`max()`**: Returns the maximum value in an iterable or arguments.
- **`min()`**: Returns the minimum value in an iterable or arguments.

### 4. Input/Output Functions
**Purpose**: Interact with the user or manipulate files.

- **`print()`**: Outputs a message to the console.
- **`input()`**: Reads a string from user input.
- **`open()`**: Opens a file and returns a corresponding file object.

### 5. Object Manipulation Functions
**Purpose**: Work with objects and attributes.

- **`type()`**: Returns the type of an object.
- **`isinstance()`**: Checks if an object is an instance of a class or tuple of classes.
- **`id()`**: Returns the unique identifier of an object.
- **`dir()`**: Returns a list of valid attributes for an object.
- **`vars()`**: Returns the `__dict__` attribute of an object.
- **`hasattr()`**: Checks if an object has a specified attribute.
- **`getattr()`**: Retrieves the value of a named attribute.
- **`setattr()`**: Sets the value of a named attribute.
- **`delattr()`**: Deletes a named attribute.

### 6. Memory and System Manipulation Functions
**Purpose**: Work with memory and low-level system aspects.

- **`memoryview()`**: Returns a memory view object.
- **`hash()`**: Returns the hash value of an object.
- **`object()`**: Returns a new featureless object.
- **`del()`**: Deletes an object.
- **`delattr()`**: Deletes an attribute from an object.

### 7. Miscellaneous Functions
**Purpose**: Functions that don't fit neatly into other categories.

- **`help()`**: Invokes the built-in help system.
- **`globals()`**: Returns a dictionary representing the current global symbol table.
- **`locals()`**: Returns a dictionary representing the current local symbol table.
- **`eval()`**: Evaluates a Python expression from a string-based input.
- **`exec()`**: Executes Python code dynamically from a string or compiled code.
- **`compile()`**: Compiles a source into a code or AST object.
- **`super()`**: Returns a proxy object that delegates method calls to a parent or sibling class.
- **`staticmethod()`**: Returns a static method for a function.
- **`classmethod()`**: Returns a class method for a function.
- **`property()`**: Returns a property attribute for a class.

### 8. Exception Handling Functions
**Purpose**: Handle exceptions and errors.

- **`issubclass()`**: Checks if a class is a subclass of another class.
- **`BaseException`**: The base class for all built-in exceptions.
- **`Exception`**: The base class for most built-in exceptions.

### 9. Memory and System Manipulation Functions
**Purpose**: Work with memory and system aspects.

- **`memoryview()`**: Returns a memory view object.
- **`hash()`**: Returns the hash value of an object.
- **`object()`**: Returns a new featureless object.
- **`del()`**: Deletes an object.
- **`delattr()`**: Deletes an attribute from an object.

### 10. Input/Output Functions
**Purpose**: Interact with the user or manipulate files.

- **`print()`**: Outputs a message to the console.
- **`input()`**: Reads a string from user input.
- **`open()`**: Opens a file and returns a corresponding file object.

---

### Conclusion

Mastering Python's built-in functions is a critical step in becoming a proficient Python developer. These functions provide the building blocks for creating efficient, readable, and maintainable code. By leveraging these functions, developers can save time, reduce errors, and produce higher-quality software.



## Author

Miguel Angelo Do Amaral Junior