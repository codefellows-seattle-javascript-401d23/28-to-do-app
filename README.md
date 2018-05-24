401 JS --  Lab 28 Todo
===
 
## Feature Tasks 
Create the following components and structure them according to the following diagram.  
``` 
App
  Landing
  Dashboard
    NoteForm
    NoteList
      Noteitem
```
#### App
* The app component manages the frontend routes and have a navbar
* the `/` route displays the `Landing` component
* the `/dashboard` route display the `Dashboard` component

#### Landing
* The landing component displayd a brief description of the to do app

#### Dashboard Component 
* The dashboard component manages the entire **application state**.
* The state contains a notes array
* A bound `addNote(note)` method adds a note to `state.notes`
  * each note that is added has the following data
    * `id`: contains the result of `uuid.v1()`
    * `content`: user provided content
    * `title`: user provided title
* A bound `removeNote(note)` method removes a note from `state.notes` based on its `id`

#### NoteForm Component
* `onSubmit` the NoteForm adds a note to the application state

#### NoteList Component 
* displays an unordered list of NoteItem components

#### NoteItem
* displays the notes content and title
* displays a delete button
  * `onClick` removes the note from the application state

## Test
* Test Dashboard
  * Test the initial state
* Test NoteForm
  * Test the initial state

