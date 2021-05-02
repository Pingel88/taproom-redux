## <div align="center">Taproom Redux</div>
#### <div align="center">*Epicodus Week 17 React Project 04/30/2021* </div> 
***<p align="center">By Mike Pingel***</p>
<p align="center">
<img alt="Neckbeards" src="https://forthebadge.com/images/badges/built-by-neckbeards.svg">
</p>

___
### This project is not in a complete or portfolio ready state, and should not be considered as representation of professional work.
___
## *Description*    
### *A React application for a taproom to manage their kegs. A user can see all available kegs and their details as well as add and remove kegs as needed. All state is handled by Redux and all reducers are tested by with Jest*
## *Component Diagram*
<img alt="Taproom Component Diagram" src="https://i.imgur.com/YN4D2v8.png">

## *Setup/Installation instructions*
### *From the web*
* Go to the GitHub repository for this project: [https://github.com/Pingel88/taproom-redux.git](https://github.com/Pingel88/taproom-redux.git)
* At the top of the repository, click <img src="https://i.imgur.com/Ej9Dphm.png" alt="Code Button" height="20" align="center"> then select "Download ZIP"

  <img src="https://i.imgur.com/tZKvGne.gif" alt="download zip gif" height="200">
* Unzip the file, navigate to the **'taproom-redux'** folder to view code
### *From the terminal*
* Clone my repository from GitHub using `git clone https://github.com/Pingel88/taproom-redux.git` in your terminal or GitBash
* Navigate to the downloaded folder using `cd` command
* Execute the `code .` command in your terminal and it will open all source code in your code editor

### *View website*
A GitHub page is not available for this project. To view functionality in your browser:
* Navigate to the **'taproom-redux'** folder in your terminal
* Enter `npm install`
* enter `npm run start`
* Open your browser and visit http://localhost:3000

### *Specs*
<details>
<summary>Action Creator Tests</summary>

| # | Behavior | Input |  Output | Complete |
| :------------- | :------------- | :------------- | :------------ | :-------------: |
| 01 | deleteKeg creates DELETE_KEG action | `deleteKeg()` | `action.type: 'DELETE_KEG'` | ✅ |
| 02 | toggleForm creates TOGGLE_FORM action | `toggleForm()` | `action.type: 'TOGGLE_FORM'` | ✅ |
| 03 | addKeg creates ADD_KEG action | `addKeg()` | `action.type: 'ADD_KEG'` | ✅ |
| 04 | selectKeg creates SELECT_KEG action | `selectKeg()` | `action.type: 'SELECT_KEG'` | ✅ |
| 05 | deselectKeg creates DESELECT_KEG action | `deselectKeg()` | `action.type: 'DESELECT_KEG'` | ✅ |
| 06 | removePint creates REMOVE_PINT action | `removePint()` | `action.type: 'REMOVE_PINT'` | ✅ |

</details>

<details>
<summary>Keg List Reducer Tests</summary>

| # | Behavior | Input/Action |  Output | Complete |
| :------------- | :------------- | :------------- | :------------ | :-------------: |
| 01 | Return default state if no action type | `kegListReducer({}, {type: null})` | Default state | ✅ |
| 02 | Add new keg to mainKegList | `c.ADD_KEG` | Keg added | ✅ |
| 03 | Delete keg from list | `c.DELETE_KEG` | Keg removed | ✅ |
| 04 | Remove pint from keg | `c.REMOVE_PINT` | One pint removed | ✅ |

</details>

<details>
<summary>Selected Keg Reducer Tests</summary>

| # | Behavior | Input/Action |  Output | Complete |
| :------------- | :------------- | :------------- | :------------ | :-------------: |
| 01 | Return default state if no action type | `selectedKegReducer({}, {type: null})` | Default state | ✅ |
| 02 | Select a keg from mainKegList | `c.SELECT_KEG` | Keg selected | ✅ |
| 03 | Remove a keg from selection | `c.DESELECT_KEG` | Selection cleared | ✅ |

</details>

<details>
<summary>Form Visible Reducer Tests</summary>

| # | Behavior | Input/Action |  Output | Complete |
| :------------- | :------------- | :------------- | :------------ | :-------------: |
| 01 | Return default state if no action type | `formVisibleReducer({}, {type: null})` | Default state | ✅ |
| 02 | Add new keg to mainKegList | `c.TOGGLE_FORM` | Form toggled | ✅ |

</details>

<details>
<summary>Root Reducer Tests</summary>

| # | Behavior | Input |  Output | Complete |
| :------------- | :------------- | :------------- | :------------ | :-------------: |
| 01 | Return default state if no action type | `rootReducer({}, {type: null})` | Default state | ✅ |
| 02 | Check initial state of kegListReducer vs rootReducer's store | `store.getState().mainKegList` | Matches `kegListReducer(undefined, {type: null})`| ✅ |
| 03 | Check initial state of formVisibleReducer vs rootReducer's store | `store.getState().formVisibleOnPage` | Matches `formVisibleReducer(undefined, {type: null})` | ✅ |
| 04 | Check initial state of selectedKegReducer vs rootReducer's store | `store.getState().selectedKeg` | Matches `selectedKegReducer(undefined, {type: null})` | ✅ |
| 05 | Check ADD_KEG action works for kegListReducer and rootReducer | `store.getState().mainKegList` | Matches output from kegListReducer | ✅ |
| 06 | Check TOGGLE_FORM action works for formVisibleReducer and rootReducer | `store.getState().formVisibleOnPage` | Matches output from formVisibleReducer | ✅ |
| 06 | Check SELECT_KEG action works for selectKegReducer and rootReducer | `store.getState().selectedKeg` | Matches output from selectedKegReducer | ✅ |

</details>

#### Running Tests:
* To run tests, verify you are in the root project folder and enter `npm install` in your terminal if not already completed.
* Run `npm run test` to perform the tests.

## *Technologies used*
* React
* Redux
* JSX
* JavaScript
* npm
* webpack
* create-react-app
* Jest
* ESLint
* Babel
* Git & GitHub

## *Known bugs*
* No known bugs

## Contact Information
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](mailto:mdpingel+github@gmail.com?subject=[GitHub]Epicodus%20Project%20-%20Taproom-Redux)

## *License and copyright*

***© Michael Pingel, 2021***

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)