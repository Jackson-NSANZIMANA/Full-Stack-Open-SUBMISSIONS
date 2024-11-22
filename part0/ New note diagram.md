sequenceDiagram
  participant browser
  participant server
  browser ->>server:POST request at /newnote: to send data user entered to server
  activate server
  server ->>browser:REDIRECT to ask browser to get to the address defined in header /notes
  deactivate server
  browser->>server:GET: https://studies.cs.helsinki.fi/exampleapp/notes
  activate server
  server->>browser:HTML Document
  deactivate server
  browser->>server:GET: CSS FILE URL/Main.css
  activate server
  server->>browser:The css file
  deactivate server
  browser->>server:GET: URL/main.js (JAVASCRIPT FILE)
  activate server
  server->>browser:Js file
  deactivate server
    %%   logic on server in js file get executed on browser then when browse notice a request for data.json%
  browser->>server:GET:data.json
  activate server
  server->>browser:data.json
  deactivate server
  %%BROWSER RENDERS PAGE WITH DATA


