## <div align="center">Taproom</div>
#### <div align="center">*Epicodus Week 16 React Project 04/23/2021* </div> 
***<p align="center">By Mike Pingel***</p>
<p align="center">
<img alt="Neckbeards" src="https://forthebadge.com/images/badges/built-by-neckbeards.svg">
</p>

___
### This project is not in a complete or portfolio ready state, and should not be considered as representation of professional work.
___
## *Description*    
### *A RESTful API application to manage park data for state or national parks. An unauthorized user can perform a GET request to retrieve park data stored in a MySQL database. A user authorized with JWT can create, update, and delete park data.*

## *Setup/Installation instructions*
### *From the web*
* Go to the GitHub repository for this project: [https://github.com/Pingel88/Taproom.git](https://github.com/Pingel88/Taproom.git).
* At the top of the repository, click <img src="https://i.imgur.com/Ej9Dphm.png" alt="Code Button" height="20" align="center"> then select "Download ZIP".

  <img src="https://i.imgur.com/tZKvGne.gif" alt="download zip gif" height="200">
* Unzip the file, navigate to the **'ParkQuest'** folder to view code.
### *From the terminal*
* Clone my repository from GitHub using `git clone https://github.com/Pingel88/Taproom.git` in your terminal or GitBash
* Navigate to the downloaded folder using `cd` command
* Execute `code .` command in your terminal and it will open all source code in your code editor.

### ⚠️*Note*⚠️
To run this project locally you will need to have .NET Core, MySQL, and Postman, follow along with the Epicodus C# setup lessons to verify installation.

###  *Interacting with  Park Quest API*
A frontend UI is not available for this project. To interact with the API utilizing Postman:
* Rename **EDITMEappsettings.json** in the **'ParkQuest'** folder to **appsettings.json**
* Open **appsettings.json** in VS Code or Notepad
  * Enter your password in the "DefaultConnection" string (replacing `[PASSWORD]`)
  * Generate a 32 alpha-numeric character string from https://www.browserling.com/tools/random-string or enter your own 32 alpha-numeric characters ("a-z", "A-Z", "0-9") in the "Secret" string (replacing `[SECRET]`) and save the file
* Create a new database using migration through Entity
  * Navigate to the **'ParkQuest'** folder in your terminal
  * Enter `dotnet ef database update`
* Enter `dotnet run` in your terminal while inside the **'ParkQuest'** folder
* Open Postman and enter the API calls described below
### Using the JSON Web Token
In order to be authorized to use the POST, PUT, DELETE functionality of the API, please authenticate yourself through Postman.
* Open Postman and create a POST request using the URL: `http://localhost:5000/api/authmanagement/register`
* Add the following query with a preferred username, email, and password to the request as raw data in the Body tab:
```
{
    "username": "[USERNAME]",
    "email": "[EMAIL@EMAIL.COM]",
    "password": "[PASSWORD]"
}
```
* The token will be generated in the response. Copy and paste it as the Bearer Token paramenter in the Authorization tab.
* If your token expires, log in with a POST request using the following URL: `http://localhost:5000/api/authmanagement/login`
* Add the following query with your email and password to the request as raw data in the Body tab:
```
{
    "email": "[EMAIL@EMAIL.COM]",
    "password": "[PASSWORD]"
}
```
* The token will be generated in the response. Copy and paste it as the Bearer Token paramenter in the Authorization tab.

### Endpoints
Base URL: `http://localhost:5000`

#### Example Query
```
http://localhost:5000/api/parks/8
```

#### Sample JSON Response
```
{
    "parkId": 8,
    "name": "Cascadia",
    "parkType": "State",
    "hasRestrooms": "No"
}
```

#### HTTP Request
```
GET /api/parks
POST /api/parks
GET /api/parks/{id}
PUT /api/parks/{id}
DELETE /api/parks/{id}
```

#### Path Parameters
| Parameter | Type | Default | Required | Description |
| :---: | :---: | :---: | :---: | --- |
| name | string | none | false | Return matches by name
| parktype | string | none | false | Return parks matching only park type - **NOTE:** Value can only be "state" or "national" |
| hasrestrooms | string | none | false | Return parks matching restroom status - **NOTE:** Value can only be "yes", "no", or "unknown"|

#### Example Query
```
http://localhost:5000/api/parks/?parktype=state&hasrestrooms=no
```

#### Sample JSON Response
```
{
    "parkId": 8,
    "name": "Cascadia",
    "parkType": "State",
    "hasRestrooms": "No"
},
{
    "parkId": 12,
    "name": "Ecola",
    "parkType": "State",
    "hasRestrooms": "No"
},
{
    "parkId": 13,
    "name": "Cottonwood Canyon",
    "parkType": "State",
    "hasRestrooms": "No"
}
```

## *Technologies used*
* C# 9
* .NET v5.0
* MySQL & MySQL Workbench
* <span>ASP.</span>NET Core API
* Entity Framework Core
* Identity
* JWT
* Postman
* REPL
* Git & GitHub

## *Known bugs*
* JWT validations are currently relaxed while the project is in development. A token will last 6 hours and does not automatically refresh.

## Contact Information
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](mailto:mdpingel+github@gmail.com?subject=[GitHub]Epicodus%20Project%20-%20ParkQuest.Solution)

## *License and copyright*

***© Michael Pingel, 2021***

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)