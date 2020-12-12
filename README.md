# team31



## App : Aristotle's Realm

A platform that enables story writers to create original stories and contribute to others' stories

## Deployed Website: https://aristotles-realm.herokuapp.com/



## Instructions: Running this app locally:

1. Clone this repository
2. Open up a terminal in the root of the cloned repository and type `npm run-script setup ` to install all dependencies this app will need
3. Now type `npm run-script build-run` and a local server serving this app will run at  http://localhost:5000/ which will be accessible by any browser

***Note : please run this app on full page size***



### Login Information

#### Credentials :

|      Username      |      Password      |
| :----------------: | :----------------: |
|        user        |        user        |
|       user2        |       user2        |
| **admin username** | **admin password** |
|       admin        |       admin        |

A guest without logging in can browse stories published pulbically.

A logged-in user can browse stories, create stories, make proposal to others stories, and accept/reject others proposal to their own stories

An admin when logged in is shown the admin dashboard. There, they can view all users and stories on the website using a search feature and delete users or stories if approrpiate.

## Features of the Story
### Create Story:

Users will be directed to a new page that user can put necessary elements for a new original story, such as the genre of the story, the name/title of the story and a little bit story contents.

There will a delay redirection (back to home page) of 5 seconds to micmic the process that data is transmitted to the server.


### Create proposal:

Users will be able to create a new proposal to an existing story by going to the sidebar and hit the browse button to browse stories. When navigating to the story page of each story, there will be a button
    at the bottom of the page that allows users to create new proposal forthis story through a popup. Duplicate proposals are not allowed.

Users can ACCEPT/REJECT a story proposal to their stories

### Manage Stories 

Users can view their stories and proposals to their stories in `MY STORIES` . Users are free to delete any story they create.

### Proposals To My Story

A Page accessible from `My Stories`, this view allows users to see the proposals to the stories they've created.

### Manage Own Proposals

User can view the proposals that they created in `MY PROPOSAL`. Users can edit their proposals when proposals are still `Pending`, not `Rejected` or `Accepted` by the author of the original story.

Only the author of the proposal can do changes to a proposal for intellectual property rights.

Proposals to users' own stories will can be viewed under the `View Proposals to this story` in a story block.

### User Profile: 

User will be able to view informations regarding themselves in the profile page, which contains a Side Bar with various buttons to direct users to `My Stories`, `My Proposals`, `Create Proposal`, `Create Story`, `Browse`. The User Profile itself also contains a button leading to the `Edit Profile` page.
User profile contains tracker for how many stories the user has created and the time since their last contribution, and various general information regarding them.

### Edit Profile:

User will be directed to a page that allows them to edit basic informations regarding themselves.

### Story:

Users will be directed to this page when viewing the main content of a story. The page contains basic information regarding the story and a chapter selector to choose the chapters to go to. The majority of the page is covered by the main texts of the story.

## Sample Unregistered User Workflow 
1. From the home page, click browse stories <br>
2. Type in any key word in the search bar to browse all stories with titles that have the keyword. <br>
3. Read any stories that you find. <br>
4. Using the sidebar, click register, fill out the user information and become a registered user.<br>
## Sample Registered User Workflow
1. Click login and log in as a user <br>
2. Click the edit icon to direct to another page that allows you to change your information <br>
3. Once your information is what you wish, click save and it will be saved to database <br>
4. Click create story on the sidebar to create the start of a new story. Note you can make the story open to proposals or not and visible to public or not. <br>
5. Once you have created a story, click on my stories on the sidebar and the story you have created is there. Note you are able to see number of views your story has received as well as the upvotes and downvotes your story has received <br>
6. Clicking on write new chapter will allow you to write new chapters as well as update old chapters of the story. <br>
7. Clicking on view proposals to this story will allow you to see all proposals for your story created by other users. <br>
8. Clicking delete will delete your story from the database. <br>
9. You can create a proposal for a story that you find from create proposal. <br>
10. Once you have created a proposal for the story, it will show up in my proposals and you will be able to view its status. <br>
11. Finally you can browse for stories in Browse by searching for titles. <br>
12. When you click a title and read it, you are able to upvote or downvote each chapter you read as well as having an option to create a proposal for the continuation of that story <br>
13. Finally, you have the option to logout on the sidebar which will return you back to the home page. <br>
## Sample Admin Workflow 
1. Click login and enter admin credentials and click Admin Login <br>
2. This takes us to the admin dashboard with the page showing all users currently created on this website <br>
3. As an admin, you can click the delete button corresponding to any user and delete that user from the website <br>
4. You can also click the search bar and search for specific users to narrow down the list. The search bar matches for username <br>
5. Click Moderate stories on the sidebar and all stories on the website will be shown <br>
6. As with the users, you are able to delete any story. Clicking on a story title will also allow you to read the story. <br>
7. You have the same rights as any normal user which means you can upvote/downvote the story as well as creating proposals for stories and your own stories. <br>
8. Press the log out button to log out. <br>

## Current Bugs
1. Unable to return to admin view once clicking out on a story
2. LastContributionDate on user profile sometimes doesnt work
3. number of proposals accepted on user profile does not work

## API Documentation (Endpoints)
Mongoose Models: Proposal, Admin, Story, User <br>
1. post /api/users : Adds a regular user to the database based on username, password, firstname, lastname and age arguments in body of request; returns created user. <br>
2. post /users/login: Takes in a username and password from the request body and finds a user in the database that matches it (if one exists); used for login and creates a session cookie if a user is found. <br>
3. get /profile: takes in a object id from request body that corresponds to a user; returns the information of that user if found; used to get information for a user<br>
4. get /getUserID: route to get the object id of a user object based on a username sent from the request body: sends the userid as a response<br>
5. get /getUsername: route to get the username of a user based on the object id of that user sent from the request body; sends the username as a response<br>
6. post /admin/login: Takes in a username and password from the request body and finds an admin in the database that matches it (if one exists); used for admin login and creates a session cookie if an admin is found. <br>
7. delete /story: Takes in an object id for a story and if a story with that object id exists, it is removed. All proposals for that story are also removed; Deletes a story from database<br>
8. delete /user: Takes in an object id for a user and if a user object in the database that matches the id exists, it is removed; All stories created by this user is removed. All proposals for any of this user's stories or created by this user is also removed. <br>
9. post /story/updateView: Updates the view count of a story in the database from id sent in from request body; Increments a story's views when a user views that story.<br>
10. post /vote: updates the upvotes or downvotes of a story based on the id from request body and integer indicating upvote or downvote; Used when a user upvotes or downvotes a story.<br>
11. get /logout: destroys the current session if it exists; used to log a user out<br>
12. post /proposal/:id : creates a proposal object from request body and stores it in the database; Used when user submits a proposal<br>
13. post /story/:id : creates a story object from request body and stores it in the database; Used when user submits a new story<br>
14. get /story : sends all stories created from a user as a response specified by ID in the request body; Used when loading "My Stories"<br>
15. post /story/:id/chapter/:chapterIndex : creates or updates a chapter to a story. The chapter number and story id are received from the url while the chapter contents are received from the request body. <br>
16. get /search/story : From a keyword sent in from the request body, find and return a list of stories with the keyword being a substring to its title; Used for searching for a story.<br>
17. post /proposalUpdateStatus: change the status of a proposal whose' object id is specified by the request body and the status to set it to is also in the request body; Updates the status of a proposal <br>
18. delete /proposalDelete: deletes a proposal from the database based on the id sent from request body; used to delete a proposal<br>
19. get /search/allstory: returns as a response all the stories in the database; Used to get all stories<br>
20. get /search/user: From a keyword sent in from the request body, find and return a list of users with the keyword being substring to thir username; Used for searching for a user.<br>
21. get /search/alluser: returns as a response all the users in the database; Used to get all users<br>
22. get /story/:id : gets a story based on the id in the url as the object id for the user the database searches for; sends back the information of that story (story object)<br>
23. get /proposals/:storyId : getting all the proposals for story whose id is specified by the id in the url. Sends all the proposals found as a response (proposal objects) <br>
24. post /api/edit : receives username, userid, firstname, lastname, age and preferred genre as request body; finds the user in the database based on the userid and updates the other fields of the user from the request body information accodingly. Sends the updated user inforamtion as a response (user object); used when user updates their profile <br>
### THIRD-PARTY Libraries used:
1. Material-UI
