1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
getElementById used for called data by id, getElementsByClassName used for call mulitiple element by class, querySelector used for only one node call by by id, class, or tag name, querySelectorAll used for mulitiple nodes.

2. How do you create and insert a new element into the DOM?

Answer: 
const create_Element = document.create_Element('p');
const parent = document.getElementByid('parent-id');
parent.appendChild(create_Element);

3. What is Event Bubbling? And how does it work?

Answer:
Event Bubbling is a reverseing way, where an event starts from the target element and then moves upward. 
fast of all it's target a node, then it back to it's parent nodes.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: 
Event Delegation is target a event container and access there all elements by using events.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: 
PreventDefalut() - used for stop browser default behavior.
stopPropagation() - used for stop event bubbling to parent elements.
