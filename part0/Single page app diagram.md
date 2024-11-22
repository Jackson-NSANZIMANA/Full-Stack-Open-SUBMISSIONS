sequenceDiagram
    participant browser
    participant server
    browser->>server:GET:https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server->>browser:Returns Html 
    deactivate server 
    browser->>server:GET: https://studies.cs.helsinki.fi/exampleapp/main.css REQUEST css file
    activate server
    server->>browser:css file
    deactivate server
    browser->>server:GET: https://studies.cs.helsinki.fi/exampleapp/spa.js REQUEST Javascript file
    activate server
    server->>browser:Javascript file
    deactivate server
    browser->>server:GET: https://studies.cs.helsinki.fi/exampleapp/data.json REQUEST Notes Data
    activate server
    server->>browser :The data.json file 
%%NOW THE BROWSER RENDERS THE HTML FILE ON THE SCREEN
