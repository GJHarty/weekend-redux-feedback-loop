# Redux Feedback Loop

This application was created in order to implement global state into my applications using the the redux library. The front-end was designed using Material-ui but I didn't do anything fancy and mostly used default theming. 

## Setup

Simply clone the respository and install the node modules. This is a React app so you will have to run the server and client seperately
```
npm install
npm run server
npm run client
```
You will also have to setup a postgres database using the following parameters. These can also be viewed in the data.sql file.
```
-- Database should be prime_feedback
CREATE  DATABASE  "prime_feedback";

-- Table to store the feedback
CREATE  TABLE  "feedback" (
	"id"  serial  primary  key,
	"feeling"  INT  not  null,
	"understanding"  INT  not  null,
	"support"  INT  not  null,
	"comments"  text,
	"flagged"  boolean  default false,
	"date"  date  not  null  default CURRENT_DATE
);
```

## Usage
When a user visits the application they are prompted to begin leeving feedback. The first three pages have radial buttons used to select a value between 1-5. On the fourth page the user will be able to add a text comment as well but this field is not required to be filled out. 
<a href="https://imgur.com/FgE9blk"><img src="https://i.imgur.com/FgE9blk.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/sXyMWwT"><img src="https://i.imgur.com/sXyMWwT.png" title="source: imgur.com" /></a>

After clicking next on the comment page the user will be brought to a review page showing all of their inputs. Clicking submit will store their feedback in the database and they will be asked if they would like to leave more feedback.

<a href="https://imgur.com/EvNI4KM"><img src="https://i.imgur.com/EvNI4KM.png" title="source: imgur.com" /></a>

## Hidden Usage
By navigating to localhost:3000/#/admin you are able to view all of the results stored in the database displayed in a list format. This is not a protected route so anyone can access it. Planned to make protected in future updates. You can remove unwanted responses by clicking the delete button and clicking on the flag will show the feedback as marked.

<a href="https://imgur.com/Rcq19G5"><img src="https://i.imgur.com/Rcq19G5.png" title="source: imgur.com" /></a>






