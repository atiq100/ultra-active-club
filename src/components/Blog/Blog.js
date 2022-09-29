import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h3>How does react work?</h3>
                <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
            </div>
            <div>
                <h3>Deference between props and state?</h3>
               
                    <ol>
                        <li>Props are used to pass data from one component to another.</li>
                        <li>The state is a local data storage that is local to the component only and cannot be passed to other components.</li>
                        <li>The this.setState property is used to update the state values in the component.</li>
                        <li>Props are read-only.State is both read and write.</li>
                    </ol>
               
            </div>
            <div>
                <h3>Usage of React Hook useEffect</h3>
                <p>The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect</p>
            </div>
        </div>
    );
};

export default Blog;