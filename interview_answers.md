# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
-The literal difference is that one has state, and the other doesn't. That means the stateful components are keeping track of changing data, while stateless components print out what is given to them via props, or they always render the same thing. Notice the stateless component is written as a function.
-Stateless components are simple functional component without having a local state but remember there is a hook in react to add state behavior in functional component as well. Stateful component can contains the state object and event handling function, user actions as well.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount function:
-componentWillMount is called before the render method is executed. It is important to note that setting the state in this phase will not trigger a re-rendering
-The life-cycle hook componentWillMount triggers before the initial render, and the function will only trigger once in the lifespan of a component.
-It is used to update the state value before the DOM is rendered
-The componentWillMount() lifecycle hook is primarily used to implement server-side logic before the actual rendering happens, such as making an API call to the server

componentWillUpdate:
-componentWillUpdate is called right before the component renders and right after shouldComponentUpdate
- it is called whenever new props are passed to the component, or the state is changed. This method is not called for the initial render
-componentWillUpdate() is called every time a re-render is required, such as when this. setState() is called. The reason we do not call this. setState() here is that the method triggers another componentWillUpdate()

3. Define stateful logic.
-Stateful logic is any code that uses state, but in the case of hooks I would define it as a behaviour created with the use of one or more hooks. It's like a perk that you're adding to a component. A perk is a good example because it tells you that its value is specific to that component, but more than one component can have that perk, that's why it's called reusable.

4. What are the three step of creating a successful test? What is done in each phase?
The (AAA pattern)Arrange-Act-Assert is a great way to structure test cases. It prescribes an order of operations:

Arrange inputs and targets. Arrange steps should set up the test case. Does the test require any objects or special settings? Does it need to prep a database? Does it need to log into a web app? Handle all of these operations at the start of the test.
Act on the target behavior. Act steps should cover the main thing to be tested. This could be calling a function or method, calling a REST API, or interacting with a web page. Keep actions focused on the target behavior.
Assert expected outcomes. Act steps should elicit some sort of response. Assert steps verify the goodness or badness of that response. Sometimes, assertions are as simple as checking numeric or string values. Other times, they may require checking multiple facets of a system. Assertions will ultimately determine if the test passes or fails.
