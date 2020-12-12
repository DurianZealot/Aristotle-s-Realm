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

### Create Story:

Users will be directed to a new page that user can put necessary elements for a new original story, such as the genre of the story, the name/title of the story and a little bit story contents.

There will a delay redirection (back to home page) of 5 seconds to micmic the process that data is transmitted to the server.



### Create proposal:

Users will be able to create a new proposal to an existing story(either belongs to the users themselves or belongs to some one else) to continue the creation process of a story.

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

### Edit Profile:

User will be directed to a page that allows them to edit basic informations regarding themselves.

### Story:

Users will be directed to this page when viewing the main content of a story. The page contains basic information regarding the story and a chapter selector to choose the chapters to go to. The majority of the page is covered by the main texts of the story.

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
