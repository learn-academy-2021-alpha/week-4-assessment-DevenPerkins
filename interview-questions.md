# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An instance variable is a variable that is created upon the initialization of the variable. Whether it is entered when called through an argument or had a set value. The way it differs from other variables is that it made by calling the variable as opposed to being made with the creation of the variable.

  Researched answer: Instance variables are created for use in Classes. They are initialized upon the calling of the class and do not exist until the calling of the class. The way it is different from other variables is that it needs to be initialized in a class before it can be used. Other variables can be assigned by naming the variable and then storing a static value in it.



2. What is a block in Ruby?

  Your answer: A block is an anonymous function that is used with a built-in method

  Researched answer: An anonymous piece of code. A block is essentially the same as a method with the key differences of not having a name and not belonging to an object.



3. Ruby has an implicit return. What does that mean?

  Your answer: An implicit return is a feature in ruby that allows for the variable or item to be returned to not need to be called by a return command 

  Researched answer: when return is not called within a method, ruby will return the value of the last executed instruction in the method. Essentially ruby will return the last value if you do not instruct it on what you want returned.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: OOP is programming based on the use objects that store date to be used in the program over and over again. It's different from functional programing int he way that it's able to give multiple outcomes of the program by calling methods stored in the object?

  Researched answer: OOP is programing where you are using an object to represent things. You're giving the object attributes that can be manipulated through methods or functions that are given to the object. OOP makes the object malleable as opposed to functional programming that makes the data that the function puts out is set and is its outcome changing only relies on the data that it is given as an argument.



5. What is the difference between a class and an object?

  Your answer:  The differences would be that a class can store attributes and can have children that call on their data. An object is more of a localized set of data i.e. an array. Arrays can have their data called upon but they cannot contain methods or have children as a class can.

  Researched answer:A class is a defined set of object properties. The creation of a class creates instances of objects that will become part of the class through out it's use. The main difference would be that Classes are the storage space for objects as objects just contain more localized data within the class.



6. STRETCH: What is `attr_accessor`?

  Your answer: the  `attr_accessor` is a built in method in Ruby to help access the data with in a class to be used outside of the class and to be manipulated from outside of the class as well.

  Researched answer: the `attr_accessor` is a setter and a getter in it's on right. It is used to set data for a class that then can be accessed for use and creation of other classes and or accessed for use of the information with in the class.



## Looking Ahead: Terms for Next Week
- MVC - Model, View, Controller: is a pattern of the architecture for a software application. 
- PostgreSQL - looks at data bases though an OOP lens
- API - application programming interface, it is used to have to applications share data with each other
- CRUD Create, Read, Update, and delete - this was used in RUBY but it seems to have a different meaning in terms of using APIs Seems this method is not recommended
- Ruby on Rails - Is a server - side application frame work written in ruby under the MIT licence. Ruby is on the MVC framework.
- ORM - Object Relational Mapper Its a data base in which you need to call the database yourself and the ORM will handle it for you.
- Active Record The active record is a model that is considered the M in MVC in rails. It is a layer of the system responsible for representing business data and logic.
