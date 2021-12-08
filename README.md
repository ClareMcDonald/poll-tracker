## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
   drawing in notebook

2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
  1. Create poll div
    1. Option 1 input
    2. Option 2 input
    3. create form button
   2. current poll div
      1. div to display current question
      2. div to display option 1 count
      3. div to display option 2 count
      4. button to vote 1
      5. button to vote 2
      6. button to undo 1
      7. button to undo 2
   3. close poll button
   4. div to display past polls

3) **For each HTML element ask: Why do I need this?** 
   1. Create poll div
         Why? to hold the inputs and button
    1. Option 1 input
         Why? for the user to create an iput
    2. Option 2 input
         Why? for the user to create a second input
    3. create form button
         Why? to submit the created poll and make it active
   2. current poll div
         Why? to hold the current poll elements
      1. div to display current question
            Why? to display the current question
      2. div to display option 1 count
            Why? to display the current count of the first option
      3. div to display option 2 count
            Why? to display the current count of the second option
      4. button to vote 1
            Why? so the user can change the vote count
      5. button to vote 2
            Why? so the user can change the vote count
      6. button to undo 1
            Why? so the user can change the vote count
      7. button to undo 2
            Why? so the user can change the vote count
   3. close poll button
            Why? to finish the current poll
   4. div to display past polls
            Why? to display past polls
   
4) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
    1. Create poll div
         Why? to hold the inputs and button
         How? div
    1. Option 1 input
         Why? for the user to create an iput
         how? input element
    2. Option 2 input
         Why? for the user to create a second input
         How? input element
    3. create form button
         Why? to submit the created poll and make it activef
         how? add "submit" event listener to create form button
   2. current poll div
         Why? to hold the current poll elements
         How? div
      1. div to display current question
            Why? to display the current question
            How? create div and append the question to it
      2. div to display option 1 count
            Why? to display the current count of the first option
            How? create div and append 
      3. div to display option 2 count
            Why? to display the current count of the second option
            How? create div and append
      4. button to vote 1
            Why? so the user can change the vote count
            How? add event listener to the button
      5. button to vote 2
            Why? so the user can change the vote count
            How? add event listener to the button
      6. button to undo 1
            Why? so the user can change the vote count
            How? add event listener to the button
      7. button to undo 2
            Why? so the user can change the vote count
            How? add event listener to the button
   3. close poll button
            Why? to finish the current poll
            How? create an event listener for the button
   4. div to display past polls
            Why? to display past polls
            How? and emply div I will append the state to
   
5) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
      💥💥💥 === event 
   
    1. Create poll div
         Why? to hold the inputs and button
         How? div
    2. Option 1 input
         Why? for the user to create an iput
         how? input element
    3. Option 2 input
         Why? for the user to create a second input
         How? input element
    4. create form button 💥💥💥
         Why? to submit the created poll and make it activef
         how? add "submit" event listener to create form button
   1. current poll div
         Why? to hold the current poll elements
         How? div
      1. div to display current question
            Why? to display the current question
            How? create div and append the question to it
      2. div to display option 1 count
            Why? to display the current count of the first option
            How? create div and append 
      3. div to display option 2 count
            Why? to display the current count of the second option
            How? create div and append
      4. button to vote 1 💥💥💥
            Why? so the user can change the vote count
            How? add event listener to the button
      5. button to vote 2 💥💥💥
            Why? so the user can change the vote count
            How? add event listener to the button
      6. button to undo 1 💥💥💥
            Why? so the user can change the vote count
            How? add event listener to the button
      7. button to undo 2 💥💥💥
            Why? so the user can change the vote count
            How? add event listener to the button
   2. close poll button 💥💥💥
            Why? to finish the current poll
            How? create an event listener for the button
   3. div to display past polls
            Why? to display past polls
            How? and emply div I will append the state to

6) **Think about how to validate each of your features according to a Definition of Done**
7) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
