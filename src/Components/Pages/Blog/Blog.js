import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <section className='py-16'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How will you improve the performance of a React Application?</Accordion.Header>
                    <Accordion.Body>
                        In React applications, we are guaranteed a very fast UI by default.many perfomance improve <br />
                        1.Using Immutable Data Structures.<br />
                        2.Function and stateless Components.<br />
                        3.Multiple Chunk File. <br />
                        4.Dependency optimization . <br />
                        5.Avoid Inline Function Definition in the Render Function.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What are the different ways to manage a state in a React application?</Accordion.Header>
                    <Accordion.Body>
                        Managing state in your React apps isnot as simple as using useState or useReducer.
                        The Four kinds of React State to Manage .when
                        we talk about state in our applications its important to be clear about what types of state actually matter.
                        <br />
                        1.Local state. <br />
                        2.Global state <br />
                        3.Server state <br />
                        4.URL state <br />

                        Once you attempt to manage state across multiple components, things get a bit trickier.

                        You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does prototypical inheritance work?</Accordion.Header>
                    <Accordion.Body>
                        JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates,
                        JavaScript allowed for “prototypal
                        inheritance”, meaning that objects and methods can be shared, extended, and copied.

                        Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods),
                        and state (data values).

                        JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively
                        unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save
                        hours of coding.

                        Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with
                        the ES6 capabilities.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>You have an array of products. Each object has a name, price, description,
                         etc. How will you implement a
                         search to find products by name?</Accordion.Header>
                    <Accordion.Body>
                        

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is a unit test? Why should write unit tests?</Accordion.Header>
                    <Accordion.Body>
                       
                    Unit testing is a software development process in which the smallest testable 
                    parts of an application, called units, are individually and independently
                     scrutinized for proper operation. This testing methodology is done during 
                     the development process by the software developers and sometimes QA staff. 
                      The main objective of unit
                     testing is to isolate written code to test and determine if it works as intended.

                     Unit Testing is importants because software developers sometimes try saving times 
                     doing minimal unit testing and this is mythd because inappropriate unit testing 
                     leads to high costs Defect sfixing during System Testing, Integration Testing and 
                     even Beta Testing after application is built. If proper
                      unit testing is done in early development, then it saves time and money in the end.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    );
};

export default Blog;