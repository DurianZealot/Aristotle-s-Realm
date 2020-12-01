// Methods in this file are used in the ProposalsToStory component

const log = console.log;

export const getStoryProposals = (storyId) => {
  log("getting proposals to story " + storyId);
  // HARDCODED
  // Requires server call here to access proposals based on >>>>storyId<<<< given
  const proposals = [
    {
      proposalId: "Oaf14j2o21kD",
      proposalSourceId: "AVDoi1j082", // The Id of the source story, currently HARDCODED, CHANGE AT WILL TO MAKE IT WORK
      proposalSourceTitle: "What the heck",
      proposalSourceAuthor: "Chumbo Sumida",
      proposalAuthor: "IGottaGoEat",
      proposalTitle: "The World Tree, Teldrassil",
      proposalChapter: "42",
      proposalAccepted: "Pending",
      proposalContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas " +
        "tincidunt nunc facilisis nulla mattis, at condimentum ex lobortis. " +
        "Sed ac elit in ligula volutpat lacinia malesuada finibus turpis. " +
        "Vivamus sodales suscipit rhoncus. Nam et auctor est, nec posuere " +
        "tortor. Vestibulum ultrices imperdiet tortor, nec lobortis risus " +
        "dictum non. Donec tincidunt tristique nibh eget pulvinar. Vivamus commodo ac nisl sit amet pellentesque.",
    },
    {
      proposalId: "Fz14qGo2LnP",
      proposalSourceId: "Vd9v18uy23489", // The Id of the source story, currently HARDCODED, CHANGE AT WILL TO MAKE IT WORK
      proposalSourceTitle: "What the heck",
      proposalSourceAuthor: "Chumbo Sumida",
      proposalAuthor: "Superdiver443",
      proposalTitle: "Stargazers",
      proposalChapter: "13",
      proposalAccepted: "Pending",
      proposalContent:
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
  ];
  return proposals;
};
