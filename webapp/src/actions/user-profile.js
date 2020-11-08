// Methods in this file modifies the UserProfile component

const log = console.log;

export const getUserInfo = (userId) => {
  log("getting user data");
  // HARDCODED
  // Requires server call here to access user general information based on >>>>>userId<<<<< given
  const user = {
    userId: "2134",
    name: "Ipsum Lorem",
    iconPath: "icon/profile-icon-placeholder.png",
    age: "20",
    genrePref: "Sci-Fi",

    joinDate: "December 21",
    followerCount: "6666",
    followingCount: "420",
    approvalRate: "69",

    proposalAcceptNum: "9",
    worksBegunNum: "11",
    LastContributionDate: "Oct 31, 2020",
  };
  return user;
};

export const getUserProposals = (userId) => {
  log("getting user proposals");
  // HARDCODED
  // Requires server call here to access user proposals based on userId given
  const proposals = [
    {
      proposalId: "AOfpo12931fapO",
      proposalSourceId: "OAIjoiawoid", // The Id of the source story, currently HARDCODED, CHANGE AT WILL TO MAKE IT WORK
      proposalSourceTitle: "Ipsum Lorem Title",
      proposalSourceAuthor: "Ipsum Lorem Author",
      proposalAuthor: "IGG Timeless",
      proposalTitle: "Melissa Is Best Girl",
      proposalChapter: "7",
      proposalAccepted: "Accepted",
      proposalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas " +
        "tincidunt nunc facilisis nulla mattis, at condimentum ex lobortis. " +
        "Sed ac elit in ligula volutpat lacinia malesuada finibus turpis. " +
        "Vivamus sodales suscipit rhoncus. Nam et auctor est, nec posuere " +
        "tortor. Vestibulum ultrices imperdiet tortor, nec lobortis risus " +
        "dictum non. Donec tincidunt tristique nibh eget pulvinar. Vivamus commodo ac nisl sit amet pellentesque.",
    },
    {
      proposalId: "1f19028nFAJ09",
      proposalSourceId: "OAIjo102nd837", // The Id of the source story, currently HARDCODED, CHANGE AT WILL TO MAKE IT WORK
      proposalSourceTitle: "Ipsum2 Lorem Title",
      proposalSourceAuthor: "Ipsum2 Lorem Author",
      proposalAuthor: "IGG ClemyClue",
      proposalTitle: "We are Valorant",
      proposalChapter: "13",
      proposalAccepted: "Pending",
      proposalContent:
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

  return proposals;
};

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
        "limp-dick lawyers and chicken-shit bureaucrats. F this 24/7 Internet spew of" +
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
  return stories
};
