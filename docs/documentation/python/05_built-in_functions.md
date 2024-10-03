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

| **Function**   | **Description**                                   | **Example**                   | **Result**                             |
|----------------|---------------------------------------------------|--------------------------------|----------------------------------------|
| `int()`        | Converts a value to an integer.                   | `int('5')`                     | `5`                                    |
| `float()`      | Converts a value to a floating-point number.      | `float('3.14')`                | `3.14`                                 |
| `complex()`    | Converts a value to a complex number.             | `complex(2, 3)`                | `(2+3j)`                               |
| `str()`        | Converts a value to a string.                     | `str(123)`                     | `'123'`                                |
| `repr()`       | Returns a string representation of an object.     | `repr([1, 2, 3])`              | `'[1, 2, 3]'`                          |
| `bool()`       | Converts a value to a boolean.                    | `bool(1)`                      | `True`                                 |
| `list()`       | Converts a value to a list.                       | `list('abc')`                  | `['a', 'b', 'c']`                      |
| `dict()`       | Converts a value to a dictionary.                 | `dict(a=1, b=2)`               | `{'a': 1, 'b': 2}`                     |
| `set()`        | Converts a value to a set.                        | `set([1, 2, 3])`               | `{1, 2, 3}`                            |
| `tuple()`      | Converts a value to a tuple.                      | `tuple([1, 2, 3])`             | `(1, 2, 3)`                            |
| `frozenset()`  | Converts a value to a frozenset.                  | `frozenset([1, 2, 3])`         | `frozenset({1, 2, 3})`                 |
| `chr()`        | Converts an integer to a Unicode character.       | `chr(65)`                      | `'A'`                                  |
| `ord()`        | Converts a character to its Unicode code.         | `ord('A')`                     | `65`                                   |
| `bin()`        | Converts an integer to a binary string.           | `bin(10)`                      | `'0b1010'`                             |
| `oct()`        | Converts an integer to an octal string.           | `oct(10)`                      | `'0o12'`                               |
| `hex()`        | Converts an integer to a hexadecimal string.      | `hex(10)`                      | `'0xa'`                                |
| `bytes()`      | Converts a value to a bytes object.               | `bytes('abc', 'utf-8')`        | `b'abc'`                               |
| `bytearray()`  | Converts a value to a bytearray object.           | `bytearray('abc', 'utf-8')`    | `bytearray(b'abc')`                    |
| `memoryview()` | Creates a memory view object from a bytes-like object. | `memoryview(b'abc')`       | `<memoryview>`                         |


### 2. Sequence and Collection Manipulation Functions
**Purpose**: Perform operations on sequences (lists, tuples, strings) and collections (sets, dictionaries).


| **Function**    | **Description**                                          | **Example**              | **Result**                          |
|-----------------|----------------------------------------------------------|--------------------------|-------------------------------------|
| `len()`         | Returns the length of an object.                         | `len([1, 2, 3])`          | `3`                                 |
| `min()`         | Returns the smallest item in an iterable.                | `min([1, 2, 3])`          | `1`                                 |
| `max()`         | Returns the largest item in an iterable.                 | `max([1, 2, 3])`          | `3`                                 |
| `sum()`         | Returns the sum of all items in an iterable.             | `sum([1, 2, 3])`          | `6`                                 |
| `sorted()`      | Returns a sorted list from an iterable.                  | `sorted([3, 1, 2])`       | `[1, 2, 3]`                         |
| `reversed()`    | Returns a reversed iterator for a sequence.              | `reversed([1, 2, 3])`     | `<reversed object>`                 |
| `enumerate()`   | Returns an enumerate object, yielding pairs of index and value. | `enumerate(['a', 'b'])`| `[(0, 'a'), (1, 'b')]`              |
| `zip()`         | Returns an iterator aggregating elements from iterables. | `zip([1, 2], ['a', 'b'])` | `[(1, 'a'), (2, 'b')]`              |
| `map()`         | Applies a function to all items in an iterable.          | `map(str, [1, 2])`        | `['1', '2']`                        |
| `filter()`      | Filters elements in an iterable based on a function.     | `filter(bool, [0, 1, 2])` | `[1, 2]`                            |


### 3. Mathematical and Numeric Functions
**Purpose**: Execute basic mathematical operations.


| **Function**  | **Description**                                   | **Example**                 | **Result**                  |
|---------------|---------------------------------------------------|-----------------------------|-----------------------------|
| `abs()`       | Returns the absolute value of a number.           | `abs(-10)`                  | `10`                        |
| `round()`     | Rounds a floating-point number to the nearest integer. | `round(3.14159, 2)`      | `3.14`                      |
| `divmod()`    | Returns a pair of quotient and remainder.         | `divmod(10, 3)`             | `(3, 1)`                    |
| `pow()`       | Returns the value of a number raised to a power.  | `pow(2, 3)`                 | `8`                         |
| `sum()`       | Sums items of an iterable (optional start value). | `sum([1, 2, 3])`            | `6`                         |
| `max()`       | Returns the maximum value in an iterable or arguments. | `max([1, 2, 3])`         | `3`                         |
| `min()`       | Returns the minimum value in an iterable or arguments. | `min([1, 2, 3])`         | `1`                         |


### 4. Input/Output Functions
**Purpose**: Interact with the user or manipulate files.


| **Function**  | **Description**                               | **Example**                     | **Result**                       |
|---------------|-----------------------------------------------|---------------------------------|----------------------------------|
| `print()`     | Outputs a message to the console.             | `print("Hello, World!")`        | `Hello, World!`                  |
| `input()`     | Reads a string from user input.               | `input("Enter name: ")`         | Returns user input as a string.  |
| `open()`      | Opens a file and returns a corresponding file object. | `open('file.txt', 'r')`    | Opens the file for reading.      |


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

| **Function**    | **Description**                                        | **Example**                              | **Result**                          |
|-----------------|--------------------------------------------------------|------------------------------------------|-------------------------------------|
| `type()`        | Returns the type of an object.                        | `type(123)`                              | `<class 'int'>`                    |
| `isinstance()`  | Checks if an object is an instance of a class or tuple of classes. | `isinstance(123, int)`             | `True`                              |
| `id()`          | Returns the unique identifier of an object.           | `id(123)`                                | Some unique integer value           |
| `dir()`         | Returns a list of valid attributes for an object.     | `dir([1, 2, 3])`                        | List of attributes for the list object |
| `vars()`        | Returns the `__dict__` attribute of an object.        | `vars({"key": "value"})`               | `{'key': 'value'}`                 |
| `hasattr()`     | Checks if an object has a specified attribute.        | `hasattr([], 'append')`                 | `True`                              |
| `getattr()`     | Retrieves the value of a named attribute.             | `getattr([], 'append')`                 | `<built-in method append of list object>` |
| `setattr()`     | Sets the value of a named attribute.                  | `setattr([], 'new_attr', 42)`           | No output, sets attribute `new_attr` to `42` |
| `delattr()`     | Deletes a named attribute.                            | `class Test: pass; t = Test(); setattr(t, 'attr', 1); delattr(t, 'attr')` | No output, deletes attribute `attr`  |


### 6. Memory and System Manipulation Functions
**Purpose**: Work with memory and low-level system aspects.

| **Function**    | **Description**                                        | **Example**                                      | **Result**                             |
|-----------------|--------------------------------------------------------|--------------------------------------------------|----------------------------------------|
| `memoryview()`  | Returns a memory view object.                          | `mv = memoryview(b'hello'); mv[0]`              | `104` (the ASCII value of 'h')        |
| `hash()`        | Returns the hash value of an object.                  | `hash("hello")`                                 | A unique integer value (e.g., `-1017891587`) |
| `object()`      | Returns a new featureless object.                      | `obj = object()`                                 | A new object with no specific attributes |
| `del()`         | Deletes an object.                                    | `x = 10; del x`                                  | No output, deletes variable `x`       |
| `delattr()`     | Deletes an attribute from an object.                   | `class Test: pass; t = Test(); setattr(t, 'attr', 1); delattr(t, 'attr')` | No output, deletes attribute `attr`    |


### 7. Miscellaneous Functions
**Purpose**: Functions that don't fit neatly into other categories.

| **Function**      | **Description**                                           | **Example**                                             | **Result**                               |
|-------------------|-----------------------------------------------------------|---------------------------------------------------------|------------------------------------------|
| `help()`          | Invokes the built-in help system.                        | `help(str)`                                            | Displays help information about the `str` class |
| `globals()`       | Returns a dictionary representing the current global symbol table. | `globals()`                                      | A dictionary of global variables and their values |
| `locals()`        | Returns a dictionary representing the current local symbol table. | `locals()`                                       | A dictionary of local variables and their values |
| `eval()`          | Evaluates a Python expression from a string-based input. | `eval('2 + 3')`                                      | `5`                                      |
| `exec()`          | Executes Python code dynamically from a string or compiled code. | `exec('x = 5')`                                    | No output; creates variable `x` with value `5` |
| `compile()`       | Compiles a source into a code or AST object.            | `code = compile('print("Hello")', '<string>', 'exec'); exec(code)` | `Hello`                                   |
| `super()`         | Returns a proxy object that delegates method calls to a parent or sibling class. | `class Parent: pass; class Child(Parent): pass; super(Child, Child())` | `<super object>`                         |
| `staticmethod()`  | Returns a static method for a function.                  | `class MyClass: @staticmethod def my_method(): pass` | No output; creates a static method in `MyClass` |
| `classmethod()`   | Returns a class method for a function.                   | `class MyClass: @classmethod def my_method(cls): pass` | No output; creates a class method in `MyClass` |
| `property()`      | Returns a property attribute for a class.                | `class MyClass: def my_property(self): return 42; my_property = property(my_property)` | A property that returns `42`            |


### 8. Exception Handling Functions
**Purpose**: Handle exceptions and errors.

| **Function/Class** | **Description**                                      | **Example**                                       | **Result**                              |
|--------------------|------------------------------------------------------|---------------------------------------------------|-----------------------------------------|
| `issubclass()`     | Checks if a class is a subclass of another class.   | `issubclass(bool, int)`                          | `True`                                  |
| `BaseException`    | The base class for all built-in exceptions.          | `BaseException`                                  | `<class 'BaseException'>`              |
| `Exception`        | The base class for most built-in exceptions.         | `Exception`                                      | `<class 'Exception'>`                  |


### 9. Memory and System Manipulation Functions
**Purpose**: Work with memory and system aspects.

| **Function**    | **Description**                                        | **Example**                                      | **Result**                             |
|-----------------|--------------------------------------------------------|--------------------------------------------------|----------------------------------------|
| `memoryview()`  | Returns a memory view object.                          | `mv = memoryview(b'hello'); mv[0]`              | `104` (the ASCII value of 'h')        |
| `hash()`        | Returns the hash value of an object.                  | `hash("hello")`                                 | A unique integer value (e.g., `-1017891587`) |
| `object()`      | Returns a new featureless object.                      | `obj = object()`                                 | A new object with no specific attributes |
| `del()`         | Deletes an object.                                    | `x = 10; del x`                                  | No output, deletes variable `x`       |
| `delattr()`     | Deletes an attribute from an object.                   | `class Test: pass; t = Test(); setattr(t, 'attr', 1); delattr(t, 'attr')` | No output, deletes attribute `attr`    |


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