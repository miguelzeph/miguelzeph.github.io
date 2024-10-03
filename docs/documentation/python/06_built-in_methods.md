# 6. Python Methods Documentation

This documentation covers several essential Python methods that are frequently used in day-to-day programming tasks. Whether you're sorting lists, manipulating strings, or working with dictionaries, these built-in methods are fundamental tools for efficient and effective coding.

### List Methods

| **Method** | **Description**                          | **Example**                        | **Result**                      |
|------------|------------------------------------------|------------------------------------|---------------------------------|
| `append()` | Adds an item to the end of the list.      | `my_list.append(4)`                | `[1, 2, 3, 4]`                 |
| `extend()` | Extends list by appending an iterable.    | `my_list.extend([4, 5])`           | `[1, 2, 3, 4, 5]`              |
| `insert()` | Inserts item at specified position.       | `my_list.insert(1, 'a')`           | `[1, 'a', 2, 3]`               |
| `remove()` | Removes the first occurrence of an item.  | `my_list.remove(2)`                | `[1, 3]`                       |
| `pop()`    | Removes and returns an item by index.     | `my_list.pop(1)`                   | `2`, remaining: `[1, 3]`        |
| `clear()`  | Removes all items from the list.          | `my_list.clear()`                  | `[]`                           |
| `index()`  | Returns the index of the first match.     | `my_list.index(3)`                 | `2`                            |
| `count()`  | Counts the occurrences of a value.        | `my_list.count(2)`                 | `1`                            |
| `sort()`   | Sorts the list in ascending order.        | `my_list.sort()`                   | `[1, 2, 3]`                    |
| `reverse()`| Reverses the order of the list.           | `my_list.reverse()`                | `[3, 2, 1]`                    |
| `copy()`   | Returns a shallow copy of the list.       | `new_list = my_list.copy()`        | `new_list = [1, 2, 3]`         |

### String Methods

| **Method**    | **Description**                              | **Example**                              | **Result**                  |
|---------------|----------------------------------------------|------------------------------------------|-----------------------------|
| `upper()`     | Converts all characters to uppercase.        | `"hello".upper()`                        | `"HELLO"`                   |
| `lower()`     | Converts all characters to lowercase.        | `"HELLO".lower()`                        | `"hello"`                   |
| `capitalize()`| Capitalizes the first character.             | `"hello world".capitalize()`             | `"Hello world"`             |
| `title()`     | Capitalizes the first letter of each word.   | `"hello world".title()`                  | `"Hello World"`             |
| `strip()`     | Removes leading and trailing spaces.         | `" hello ".strip()`                      | `"hello"`                   |
| `replace()`   | Replaces occurrences of a substring.         | `"hello".replace('e', 'a')`              | `"hallo"`                   |
| `find()`      | Finds the index of the first match.          | `"hello".find('e')`                      | `1`                         |
| `split()`     | Splits string into a list.                   | `"a,b,c".split(',')`                     | `['a', 'b', 'c']`           |
| `join()`      | Joins iterable into a string.                | `" ".join(['a', 'b', 'c'])`              | `"a b c"`                   |
| `startswith()`| Checks if string starts with substring.      | `"hello".startswith('h')`                | `True`                      |
| `endswith()`  | Checks if string ends with substring.        | `"hello".endswith('o')`                  | `True`                      |

### Dictionary Methods

| **Method** | **Description**                                   | **Example**                                  | **Result**                   |
|------------|---------------------------------------------------|----------------------------------------------|------------------------------|
| `get()`    | Returns the value for a given key.                | `my_dict.get('age', 'Unknown')`              | `30` or `'Unknown'`           |
| `keys()`   | Returns a view of the dictionary’s keys.          | `my_dict.keys()`                             | `dict_keys(['name', 'age'])`  |
| `values()` | Returns a view of the dictionary’s values.        | `my_dict.values()`                           | `dict_values(['John', 30])`   |
| `items()`  | Returns a view of the dictionary’s items.         | `my_dict.items()`                            | `dict_items([('name', 'John')])` |
| `update()` | Updates the dictionary with key-value pairs.      | `my_dict.update({'age': 30})`                | `{'name': 'John', 'age': 30}` |
| `pop()`    | Removes a key-value pair and returns its value.   | `my_dict.pop('age')`                         | `30`, remaining: `{'name': 'John'}` |
| `clear()`  | Removes all key-value pairs from the dictionary.  | `my_dict.clear()`                            | `{}`                         |

### Set Methods

| **Method**  | **Description**                                  | **Example**                                | **Result**              |
|-------------|--------------------------------------------------|--------------------------------------------|-------------------------|
| `add()`     | Adds an element to the set.                      | `my_set.add(4)`                            | `{1, 2, 3, 4}`          |
| `update()`  | Updates the set with multiple elements.          | `my_set.update([5, 6])`                    | `{1, 2, 3, 5, 6}`       |
| `remove()`  | Removes a specific element (raises error if not found). | `my_set.remove(2)`                        | `{1, 3}`                |
| `discard()` | Removes a specific element (no error if not found). | `my_set.discard(4)`                       | `{1, 2, 3}`             |
| `pop()`     | Removes and returns an arbitrary element.        | `my_set.pop()`                             | `1` (for example), remaining: `{2, 3}` |
| `clear()`   | Removes all elements from the set.               | `my_set.clear()`                           | `set()`                 |

### Other Built-in Methods

| **Method**  | **Description**                                  | **Example**                                | **Result**              |
|-------------|--------------------------------------------------|--------------------------------------------|-------------------------|
| `len()`     | Returns the number of items.                     | `len([1, 2, 3])`                           | `3`                     |
| `max()`     | Returns the largest item.                        | `max([1, 2, 3])`                           | `3`                     |
| `min()`     | Returns the smallest item.                       | `min([1, 2, 3])`                           | `1`                     |
| `sum()`     | Returns the sum of items.                        | `sum([1, 2, 3])`                           | `6`                     |
| `enumerate()`| Returns index and value pairs.                  | `list(enumerate(['a', 'b', 'c']))`         | `[(0, 'a'), (1, 'b'), (2, 'c')]` |
| `zip()`     | Aggregates elements from iterables.              | `list(zip([1, 2], ['a', 'b']))`            | `[(1, 'a'), (2, 'b')]`  |
| `range()`   | Generates a sequence of numbers.                 | `list(range(3))`                           | `[0, 1, 2]`             |



## Conclusion
These are some of the most commonly used Python methods in everyday programming. Having a strong grasp of these functions will greatly improve your efficiency and productivity as a Python programmer.


## Author

Miguel Angelo Do Amaral Junior