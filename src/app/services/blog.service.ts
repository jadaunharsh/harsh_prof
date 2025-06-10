import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogs: Blog[] = [
    {
      id: 1,
      title: 'Mastering Constructors in C#: The Gateway to Object Initialization',
      subtitle: "Understand how constructors work in C#, why they're essential, and how to use them effectively in your applications.",
      author: 'Jordan Blake',
      content: `<h3>Introduction</h3>
      <br/>
      <p>In the world of object-oriented programming (OOP), constructors are the unsung heroes that bring your objects to life. Whether you're building desktop applications, games, or web services in C#, constructors play a vital role in initializing new instances of classes.In this post, we'll explore what constructors are, how they work, and how to use them effectively.</p>
      <h3>What is a Constructor?</h3>
      <br/>
      <p>A constructor is a special method in a class that gets called automatically when an object of that class is created. Its primary role is to initialize fields or perform setup operations necessary for the object to function correctly.

      In C#, constructors have the same name as the class and do not have a return type, not even void.</p>
      
      <pre><code>
      public class Car
      {
          public string Make;
          public string Model;

          // Constructor
          public Car(string make, string model)
          {
              Make = make;
              Model = model;
          }
      }
      </code></pre>

      <h3>Types of Constructors in C#</h3>
      <br/>
      <ol>
        <li><strong>Default Constructor:</strong>
        <br/> A constructor that takes no parameters. If you don't define any constructor, C# provides a default one.
        <pre><code>
          public Car() 
          {
              Make = "Unknown";
              Model = "Unknown";
          }
        </code></pre>
        </li>
        <li><strong>Parameterized Constructor:</strong>
        <br/> A constructor that takes parameters to initialize the object with specific values.
        <pre><code>
          public Car(string make, string model) 
          {
              Make = make;
              Model = model;
          }
        </code></pre>
        </li>
        <li><strong>Static Constructor:</strong>
        <br/> A constructor that initializes static members of the class. It is called once, before any static members are accessed or any instances are created.
        <pre><code>
          public class Configuration
          {
              public static string AppName;

              // Static Constructor
              static Configuration()
              {
                  AppName = "My Application";
              }
          }
        </code></pre>
        </li>
        <li><strong>Copy Constructor:</strong>
        <br/> A constructor that creates a new object as a copy of an existing object. This is not built-in in C#, but you can implement it manually.
        <pre><code>
          public Car(Car other)
          {
              Make = other.Make;
              Model = other.Model;
          }
        </code></pre>
        </li>
      </ol>

      <h3>Why Use Constructors?</h3>
      <br/>
      <p>Constructors are essential for several reasons:</p>
      <ul>
        <li><strong>Initialization:</strong> They ensure that an object is in a valid state before it is used.</li>
        <li><strong>Encapsulation:</strong> They allow you to control how objects are created and initialized, promoting encapsulation.</li>
        <li><strong>Overloading:</strong> You can define multiple constructors with different parameters, allowing for flexible object creation.</li>
        <li><strong>Dependency Injection:</strong> Constructors can be used to inject dependencies, making your code more modular and testable.</li>
      </ul>

      <h3>Constructor Overloading</h3>
      <br/>
      <p>C# allows multiple constructors in a single class as long as they have different parameter lists. This is known as constructor overloading.</p>
      <pre><code>
        public class Car
        {
            public Car() { }
            public Car(string make) { Make = make; }
            public Car(string make, string model) { Make = make; Model = model; }
        }
      </code></pre>

      `,
      image: '',
      date: '2025-06-10',
      tags: ['C#', 'OOP', 'Constructors', '.NET', 'Programming Basics', 'Software Development']
    },
    {
      id: 2,
      title: 'RxJS Operators You Should Know',
      subtitle: 'Powerful techniques with reactive programming',
      author: 'John Smith',
      content: '<p>Exploring map, mergeMap, switchMap...</p>',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
      date: '2025-06-02',
      tags: ['RxJS', 'Angular', 'Observables']
    },
    {
      id: 3,
      title: 'RxJS Operators You Should Know',
      subtitle: 'Powerful techniques with reactive programming',
      author: 'John Smith',
      content: '<p>Exploring map, mergeMap, switchMap...</p>',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
      date: '2025-06-02',
      tags: ['RxJS', 'Angular', 'Observables']
    },
    {
      id: 4,
      title: 'RxJS Operators You Should Know',
      subtitle: 'Powerful techniques with reactive programming',
      author: 'John Smith',
      content: '<p>Exploring map, mergeMap, switchMap...</p>',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
      date: '2025-06-02',
      tags: ['RxJS', 'Angular', 'Observables']
    },
    {
      id: 5,
      title: 'RxJS Operators You Should Know',
      subtitle: 'Powerful techniques with reactive programming',
      author: 'John Smith',
      content: '<p>Exploring map, mergeMap, switchMap...</p>',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
      date: '2025-06-02',
      tags: ['RxJS', 'Angular', 'Observables']
    }
  ];

  getBlogs() {
    return this.blogs;
  }

  getBlogById(id: number): Blog | undefined {
    return this.blogs.find(blog => blog.id === id);
  }

  constructor() { }
}
