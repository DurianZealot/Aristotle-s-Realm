# team31



## App : Aristotle's Realm

A platform that enables story writters to create original stories and contributing to others' stories

## Deployed Website: https://aristotles-realm.herokuapp.com/



##### Instruction on How to run this app virtually:

1. Go to `team31/webapp` directory
2. `npm install` to install all dependencies this app will need
3. `npm start` will run this app at  http://localhost:3000

***Note : please run this app on full page size***



#### Login Information

#### Users :

|      Username      |      Password      |
| :----------------: | :----------------: |
|        user        |        user        |
|       user2        |       user2        |
| **admin username** | **admin password** |
|       admin        |       admin        |

A guest without loggoing in can browse stories published pulically.

A log-in user can browse stories, create stories, make proposal to others stories, create own proposal to others stories, and accept/reject others proposal to own stories

An admin account can log in as a user to use the website as stated above. They can also choose to log in as admin on the login screen to access the admin dashboard which 
will allow them to review reports as well as view all users and stories on the website



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
