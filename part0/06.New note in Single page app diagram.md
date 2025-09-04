sequenceDiagram
    participant browser
    participant server
    browser->>server:POST: https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server 
    browser-->server :New note data sent to the server
    %%Note is added with the Javascript function logic
    server-->browser:new note addes to notes list
    deactivate server
    browser->>browser:Browser Updates the DOM to update notes list
    %%Inside the browser the notes are rendered
    
%%NOW THE BROWSER RENDERS THE HTML FILE ON THE SCREEN
