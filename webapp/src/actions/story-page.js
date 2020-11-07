// Methods in this file are used in the StoryPage component

const log = console.log;

export const getStory = (storyId) => {
  log("getting data for a story");
  log("Story Id: " + storyId);
  // HARDCODED
  // REQUIRES SERVER CALL to go through the list of all stories and pick out the stories with matching >>>>storyId<<<<
  switch (storyId) {
    case "Aedk1029je0a8d":
      return {
        storyId: "Aedk1029je0a8d",
        storyTitle: "Metal Gear Solid",
        storyAuthor: "UofTThrowAway69",
        storyDate: "December 20 2001",
        storyViewCount: "98517",
        storyTags: ["sci-fi", "romance", "war"],
        storyVotes: ["1109238", "6969"],
        storyChapters: [
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
            "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
            "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
            "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, " +
            "sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Look at them, they come to this place when they know they are not pure. Tenno use the keys, " +
            "but they are mere trespassers. Only I, Vor, know the true power of the Void. I was cut in half, " +
            "destroyed, but through it's Janus Key, the Void called to me. It brought me here and here I was " +
            "reborn. We cannot blame these creatures, they are being led by a false prophet, an impostor who " +
            "knows not the secrets of the Void. Behold the Tenno, come to scavenge and desecrate this sacred " +
            "realm. My brothers, did I not tell of this day? Did I not prophesize this moment? Now, " +
            "I will stop them. Now I am changed, reborn through the energy of the Janus Key. Forever " +
            "bound to the Void. Let it be known, if the Tenno want true salvation, they will lay down " +
            "their arms, and wait for the baptism of my Janus key. It is time. I will teach these " +
            "trespassers the redemptive power of my Janus key. They will learn it's simple " +
            "truth. The Tenno are lost, and they will resist. But I, Vor, will cleanse this place of their impurity.",
        ],
      };
    case "12345678":
      return {
        storyId: "12345678",
        storyTitle: "Shrek 20",
        storyAuthor: "UofTThrowAway20",
        storyDate: "December 20 2020",
        storyViewCount: "12",
        storyTags: ["fantasy", "romance", "war"],
        storyVotes: ["7", "420"],
        storyChapters: [
          "WHAT IS LOVE BABY DONT HURT ME DONT HURT ME NO MORE. " +
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
            "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
            "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
            "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, " +
            "sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Look at them, they come to this place when they know they are not pure. Tenno use the keys, " +
            "but they are mere trespassers. Only I, Vor, know the true power of the Void. I was cut in half, " +
            "destroyed, but through it's Janus Key, the Void called to me. It brought me here and here I was " +
            "reborn. We cannot blame these creatures, they are being led by a false prophet, an impostor who " +
            "knows not the secrets of the Void. Behold the Tenno, come to scavenge and desecrate this sacred " +
            "realm. My brothers, did I not tell of this day? Did I not prophesize this moment? Now, " +
            "I will stop them. Now I am changed, reborn through the energy of the Janus Key. Forever " +
            "bound to the Void. Let it be known, if the Tenno want true salvation, they will lay down " +
            "their arms, and wait for the baptism of my Janus key. It is time. I will teach these " +
            "trespassers the redemptive power of my Janus key. They will learn it's simple " +
            "truth. The Tenno are lost, and they will resist. But I, Vor, will cleanse this place of their impurity.",
        ],
      };
    default:
      return "ERROR NO CORRESPONDING STORY FOUND";
  }
};
