// Methods in this file modifies the UserProfile component

import Axios from "axios";

const log = console.log;

/*==================================TODO: IMPLEMENT THE FUNCTIONS HERE====================================*/
export const getUserInfo = async(userId) => {
  const url = `/profile`
  return Axios(
    {
      method:'get',
      url: url,
      params: {
        userId
      }
    })
    .then(res => {
      console.log('Response :', res)
      const userInfo = {
        username : res.data.username,
        password : res.data.password,
        firstName : res.data.firstName,
        lastName : res.data.lastName,
        age: res.data.age,
        genrePref: res.data.genrePref,
        approvalRate: res.data.approvalRate,
        proposalAcceptNum: res.data.proposalAcceptNum,
        worksBegunNum: res.data.worksBegunNum,
        lastContributionDate: res.data.LastContributionDate.split('T')[0]
      }
      return (Promise.resolve(userInfo))
    })
    .catch(error => Promise.reject())
}

// Get all proposals by the given userId
export const getUserProposals = (userId) => {
  return Axios({
    method:'get',
    url:`/proposals/all/${userId}`
  }).then(response => {return Promise.resolve(response)})
  .catch(error => {return Promise.reject(error)})
}



export const getUserStories = (userId) => {
  log("getting user stories");
  // HARDCODED
  // Requires server call here to access user proposals based on userId given
  const stories = [
    {
      storyId: "Aedk1029je0a8d",
      storyTitle: "Metal Gear Solid",
      storyAuthor: "UofTThrowAway69",
      storyDate: "December 20 2001",
      storyViewCount: "98517",
      storyTags: ["sci-fi", "romance", "war"],
      storyVotes: ["1109238", "6969"],
      storyContent:
        "I do need capital. And votes. Wanna know why? I have a dream." +
        "That one day, every person in this nation will control their OWN destiny." +
        "A land of the TRULY free, dammit. A nation of ACTION, not words. Ruled by STRENGTH," +
        "not committee. Where the law changes to suit the individual, not the other way" +
        "around. Where power and justice are back where they belong: in the hands of the" +
        "people! Where every man is free to think -- to act -- for himself! F all these" +
        "limp lawyers and chicken bureaucrats. F this 24/7 Internet spew of" +
        "trivia and celebrity bullshit. F American pride. F the media! F all of it!" +
        "America is diseased. Rotten to the core. There's no saving it -- we need to pull" +
        "it out by the roots. WIpe the slate clean. BURN IT DOWN! And from the ashes, a" +
        "new America will be born. Evolved, but untamed! The weak will be purged, and the" +
        "strongest will thrive -- free to live as they see fit, they will make America GREAT AGAIN!",
    },
    {
      storyId: "12345678",
      storyTitle: "Shrek 20",
      storyAuthor: "UofTThrowAway20",
      storyDate: "December 20 2020",
      storyViewCount: "12",
      storyTags: ["fantasy", "romance", "war"],
      storyVotes: ["7", "420"],
      storyContent:
        "I do need capital. And votes. Wanna know why? I have a dream." +
        "That one day, every person in this nation will control their OWN destiny." +
        "A land of the TRULY free, dammit. A nation of ACTION, not words. Ruled by STRENGTH," +
        "not committee. Where the law changes to suit the individual, not the other way" +
        "around. Where power and justice are back where they belong: in the hands of the" +
        "people! Where every man is free to think -- to act -- for himself! F all these" +
        "limp-dick lawyers and chicken-shit bureaucrats. F this 24/7 Internet spew of" +
        "trivia and celebrity bullshit. F American pride. F the media! F all of it!" +
        "America is diseased. Rotten to the core. There's no saving it -- we need to pull" +
        "it out by the roots. WIpe the slate clean. BURN IT DOWN! And from the ashes, a" +
        "new America will be born. Evolved, but untamed! The weak will be purged, and the" +
        "strongest will thrive -- free to live as they see fit, they will make America GREAT AGAIN!",
    },
  ];
  return stories;
};
