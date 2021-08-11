# Custom [moment.js](https://momentjs.com/) ✊🏿

Moment.js is a library for convenient work with dates. You have to implement a simplified version of it.<br/>
## Requirements:

* The lib should be implemented as a class (e.g. CustomMoment)
* The lib should be able to be used in a browser and like an Node.js module. [Useful link](https://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/)
* An instance of the CustomMoment class, in fact, is a wrapper over the Date object. We should be able to operate with it (see below)
* There should be ways to create CustomMoment instance
  * Using the constructor
     ```
       const now = new CustomMoment(new Date()); // passing an instance Date
       const now = new CustomMoment(12323323); // or milliseconds (similar to the Date constructor)
    ```
  * Using <i>parse</i> method
    ```
      const someDate = CustomMoment.parse('21-12-2012', 'DD-MM-YYYY');
      const anotherDate = CustomMoment.parse('01202019', 'MMDDYYYY');
    ```

* An instance of the CustomMoment should have next methods:
  * <i>format</i> <br/>
    ```
      someDate.format('YYYY/MM/DD'); // => 2012/12/21
      anotherDate.format('MM-YYYY'); // => 01-2019
    ```
  * <i>fromNow</i><br/>
  Returns a difference between now and the date saved in the instance. The result should be well readable.
    ```
      someDate.fromNow(); // => 7 years ago
      anotherDate.fromNow(); // => in 11 days
    ```
  * <i>toDate</i><br/>
  Returns a Date object with the instance data. 
    ```
      const date = someDate.toDate();
      date instanceof Date // => true
    ```
