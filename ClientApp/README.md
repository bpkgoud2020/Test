# `Hanna Application`

This Application was built using .net core , Aurelia and In memory Entity Framework components.

## Download Source

Download the code for this solution in Git Hub. Repo here.



## Build Source

.Net Core webapi component :
- Use Visual Studio IDE to build/compile the code. 
- Open HannaApp.Sln and build using Visual Studio IDE.



Aurelia Component
- Navigate to =>HannaApplicationProcess.December20.web\ClientApp
- Install below binaries one by one.
    - npm install 
    - npm install aurelia-cli -g
    - npm install aurelia-fetch-client -save
    - npm install aurelia-i18n
    - npm install i18next i18next-xhr-backend
    - npm install -D @types/i18next
    - npm install -D @types/i18next-xhr-backend
    - npm install aurelia-validation

Run below command to build the clientApp source.
- npm start build


## Run dev app

Net Core webapi component
Using Visual Studio IDE , Navigate to IDE->Debug->Start without Debugging
It will open up a browser session at 'http://localhost:5000'

Type -> http://localhost:5000/Applicant/GetAll [ To check whether service is actually running , if the service is
running successfully, you will see sample data set values in your browser.
]


Aurelia Component
Run `npm start`, then it will open a session at `http://localhost:8080`

Type-> 'http://localhost:8080' url in browser. You should see the Applicants entry form in UI.

