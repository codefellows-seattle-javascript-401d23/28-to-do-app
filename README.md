# 29-lab
**Author**: Joanna Coll
**Version**: 1.0.0 

## Overview

This app lets the user create notes. It has a lading page and dashboard where the user can add the new notes with title and content and remove each of them with a click. The new functionality allows the user to click on a button and update one of the notes. The form to update keeps the previous values util they get updated.

## Getting Started

1. To start you need to install all the necessary dependencies and create all the directories.
2. Start with building webpack.common.js and webpack.dev.js files.
3. Create  necessary components for: dashboard, lading page, note form, note item, note list and app.
4. Link them so the App was a parent of dashboard and landing page. Dashboard is a parent of note form and note list and note list is a parent of note item.
5. Add the noteUpdateForm function and create a modal to display the form fields for updating the values.
6. Link the modal to the NoteItem and NoteForm and add the handler to the Dashboard.
7. Render all the components into HTML.
8. Change scss file accordingly.



## Architecture
JavaScript, Node.js, Airbnb package, babel, Sass, React, Enzyme, Jest, other dependencies

## Change Log

05-12-2018 6:00pm - The application is finished.
05-12-2018 9:30pm - Finished writing README.md


## Credits and Collaborations
Thanks to Nicole Weese for help.
