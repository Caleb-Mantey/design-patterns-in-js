# Behavioral Patterns

These types of design pattern focus on the communication between objects in an application (how classes and communicates with each other).

## Types of Behavioral Patterns

### [Memento Pattern](Memento%20Pattern/)

The memento pattern is also know as the undo pattern. This pattern makes it easier to implement undo functionality in you application. It allows restoring an object to a previous state.
Imagine you have been taxed to build a text editor which has an undo feature or a game where a user can undo some actions. Without the memento pattern this
will take a lot of effort to implement.

[View Example](Memento%20Pattern/)

### [State Pattern](State%20Pattern/)

The state pattern is used when your application needs to switch between a lot of states. This pattern eliminates long if statements in your code makes your code more
maintainable and readable. It allows an object to behave differently depending on the state it is in.

[View Example](State%20Pattern/)

### [Iterator Pattern](Iterator%20Pattern/)

This pattern is useful when you have a data type that needs to be iterated. As developers sometimes some custom data types we create in our application may have some methods for transforming or performing some operations on the data, with this pattern we can create our custom iterator that can iterate our data and run some actions with ease. It allows iterating over an object without having to expose the object’s internal structure (which may change in the future).

[View Example](Iterator%20Pattern/)

### [Strategy Pattern](Strategy%20Pattern/)

This pattern is quite similar to the state pattern. The difference between the strategy and state pattern is in the state pattern we change to different state but with the strategy
pattern we simply implement a strategy, and we can keep adding more strategies that needs to be executed. This pattern is also known as the policy pattern as it allows passing different algorithms (behaviours) to an object.
[View Example](Strategy%20Pattern/)

### [Template Method Pattern](Template%20Methods%20Pattern/)

This pattern is useful when some classes needs to share some common functionality from a base class. We can implement the shared functionality in the base class and allow
the sub classes to inherit those behaviors by default.
[View Example](Template%20Methods%20Pattern/)

### [Command Pattern](Command%20Pattern/)

The Command pattern allows decoupling a sender from a receiver. The sender will talk to the receiver through a command. Commands can be undone and persisted.
[View Example](Command%20Pattern/)

### [Composite Command Pattern](Composite%20Command%20Pattern/)

This pattern allow as to add a list of commands to be executed and executes them at once.
[View Example](Composite%20Command%20Pattern/)

### [Observer Pattern](Observer%20Pattern/)

This pattern allows an object notify other objects when its state changes.
[View Example](Observer%20Pattern/)

### [Chain Of Responsibility Pattern](Chain%20Of%20Responsibility%20Pattern/)

Allows building a chain of objects to process a request.
[View Example](Chain%20Of%20Responsibility%20Pattern/)

### Visitor Pattern

Allows adding new operations to an object structure without modifying it.
