import Footer from "../../components/Footer";
import Image from 'next/image'
import NewsLetter from "../../components/NewsLetter";
import  Header  from "../../components/Header";
import Comment   from "../CommentSection/page"

export default function Page(){
    return(
        <div>
            <Header />
            <main className="font-bodyFont">
        <section className="container mx-auto md:px-2 py-16 w-1/2">
        
        <div className="post py-10">
            <h1 className="font-bold text-4xl text-center pb-05">"Understanding Asynchronous JavaScript: Promises, Async/Await, and Callbacks"</h1>
            <p className="text-gray-600 text-xl text-center">JavaScript is a single-threaded language, meaning it can only handle one operation at a time. But in a world of dynamic, real-time applications, handling tasks like API calls, timers, and event listeners without blocking the main thread is crucial. This is where asynchronous programming in JavaScript comes in. In this article, we’ll explore asynchronous concepts, including callbacks, promises, and async/await, and why they are essential in modern JavaScript.
    
    </p>
    <div className="py-10">
      <img src={"/images/blogs/blog2.jpg"} width={900} height={600}></img>
    </div>
    <div className="content text-600 text lg flex flex-col gap-4">
        <p><h3 className="font-bold text-2xl text-center pb-05 content text-black-600">Why Asynchronous Programming?</h3>
    <p className="text-gray-600 text-lg">
    Asynchronous programming allows JavaScript to perform other tasks while waiting for certain operations, like network requests, to complete. Without async handling, these operations could freeze the UI, leading to a poor user experience.
    </p></p>
    
    
    
    <h3 className="font-bold text-2xl text-center pb-05 content text-black-600">Core Concepts</h3>
    
    <h4 className="font-bold text-xl">1. Callbacks</h4>
    <p className="content text-grey-600 text lg flex flex-col gap-4">
     <p className="text-gray-600 text-lg">
     Callbacks were JavaScript’s original way to handle async operations. A callback is simply a function passed as an argument to another function and is invoked once the task is complete. While effective, callbacks can lead to “callback hell,” making code hard to read.
        </p> 
    <h4 className="font-bold text-xl">2. Promises</h4>  
     <p className="text-gray-600 text-lg">  Promises were introduced to handle async operations more gracefully. They represent a value that will be available now, later, or never. By using .then() and .catch(), promises make error handling easier and improve readability.
   
   </p> </p>  
    
       <h4 className="font-bold text-xl"> 3. Async/Await</h4> 
      <p className="text-gray-600 text-lg"> Introduced in ES2017, async/await is syntactic sugar for promises, making asynchronous code look and behave more like synchronous code. It enhances readability and reduces nested structures, allowing developers to write clean, straightforward code.</p>
    
     
    
    <h3 className="font-bold text-2xl text-center pb-05 content text-black-600">Overview of CSS Flexbox and Grid

    </h3>
    
    
    <h4 className="font-bold text-xl">1. Flexbox  </h4> 
    <p className="text-gray-600 text-lg">Flexbox is a one-dimensional layout system that is ideal for arranging items in a row or column. It provides powerful alignment tools, allowing items to align, space, and stretch effortlessly within a container.  </p>
    <h4 className="font-bold text-xl">2. CSS Grid
        </h4> 
    <p className="text-gray-600 text-lg"> CSS Grid is a two-dimensional layout system, perfect for building complex, grid-based layouts. With rows and columns, it offers more control over the placement of items, making it ideal for responsive, grid-based designs.</p>

    
    <h3>Examples in Practice
    </h3>
    
    <p className="text-gray-600 text-lg">Let’s look at an example. First, here’s an asynchronous function using promises:<br /><br />
    <p  className="text-gray-600 text-lg">
    <code className="font-code">
 
    </code><br /><br />
    </p>
    
    
    <h3 className="font-bold text-2xl text-center pb-05 content text-black-600">Conclusion</h3>
    
    <p  className="text-gray-600 text-lg">Understanding asynchronous JavaScript is vital for building responsive, user-friendly applications. Whether you’re using callbacks, promises, or async/await, mastering async patterns will make your code more efficient and enjoyable to work with. </p>  </p>
    </div>
        </div>
        <Comment />
        </section>
    <NewsLetter />
    <Footer />
    </main>
        </div>

    )
}
   