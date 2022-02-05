# Design Patterns
Design patterns are simply solutions to problems that experienced software engineers encounter during the development of a software product. They provide a general best practice approach to problems that have been solved by try and error from renowned software engineers.
Design patterns are good and helps software engineers keep their project organized. Maintaining software projects is very hard and it is very important we follow some set of rules to keep our code readable, reusable and easily maintainable.

In 1994, four authors Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides published a book titled `Design Patterns - Elements of Reusable Object-Oriented Software` which initiated the concept of Design Patterns in Software development.

These authors are collectively known as `Gang of Four (GOF)`.

## Types of Design Patterns
Design patterns can be grouped into three main categories. There are a lot of design patterns currently been used but all these patterns fall under one of these three categories.

- Behavioral Patterns
- Structural Patterns
- Creational Patterns


### Behavioral Patterns
These types of design pattern focus on the communication between objects in an application (how classes and communicates with each other). 

### Types of Behavioral Patterns
## [Memento Pattern](behavioral%20patterns/Memento%20Pattern/)
The memento pattern is also know as the undo pattern. This pattern makes it easier to implement undo functionality in you application. It allows restoring an object to a previous state.
Imagine you have been taxed to build a text editor which has an undo feature or a game where a user can undo some actions. Without the memento pattern this
will take a lot of effort to implement.

[View Example](behavioral%20patterns/Memento%20Pattern/)


## [State Pattern](behavioral%20patterns/State%20Pattern/)
The state pattern is used when your application needs to switch between a lot of states. This pattern eliminates long if statements in your code makes your code more
maintainable and readable. It allows an object to behave differently depending on the state it is in.

[View Example](behavioral%20patterns/State%20Pattern/)

## [Iterator Pattern](behavioral%20patterns/Iterator%20Pattern/)
This pattern is useful when you have a data type that needs to be iterated. As developers sometimes some custom data types we create in our application may have some methods for 
transforming or performing some operations on the data, with this pattern we can create our custom iterator that can iterate our data and run some actions with ease. It allows iterating over an object without having to expose the object’s internal structure (which may change in the future).

[View Example](behavioral%20patterns/Iterator%20Pattern/)

## [Strategy Pattern](behavioral%20patterns/Strategy%20Pattern/)
This pattern is quite similar to the state pattern. The difference between the strategy and state pattern is in the state pattern we change to different state but with the strategy
pattern we simply implement a strategy, and we can keep adding more strategies that needs to be executed. This pattern is also known as the policy pattern as it allows passing different algorithms (behaviours) to an object.
[View Example](behavioral%20patterns/Strategy%20Pattern/)

## [Template Method Pattern](behavioral%20patterns/Template%20Methods%20Pattern/)
This pattern is useful when some classes needs to share some common functionality from a base class. We can implement the shared functionality in the base class and allow
the sub classes to inherit those behaviors by default.
[View Example](behavioral%20patterns/Template%20Methods%20Pattern/)

## [Command Pattern](behavioral%20patterns/Command%20Pattern/)
The Command pattern allows decoupling a sender from a receiver. The sender will talk to the receiver through a command. Commands can be undone and persisted.
[View Example](behavioral%20patterns/Command%20Pattern/)

## [Composite Command Pattern](behavioral%20patterns/Composite%20Command%20Pattern/)
This pattern allow as to add a list of commands to be executed and executes them at once.
[View Example](behavioral%20patterns/Composite%20Command%20Pattern/)
## [Observer Pattern](behavioral%20patterns/Observer%20Pattern/)
This pattern allows an object notify other objects when its state changes.
[View Example](behavioral%20patterns/Observer%20Pattern/)

## [Chain Of Responsibility Pattern](behavioral%20patterns/Chain%20Of%20Responsibility%20Pattern/)
Allows building a chain of objects to process a request.
[View Example](behavioral%20patterns/Chain%20Of%20Responsibility%20Pattern/)

## Visitor Pattern
Allows adding new operations to an object structure without modifying it.