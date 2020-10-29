// Methods in this file modifies the UserProfile component

const log = console.log;

export const getUserInfo = (userId) => {
    log("getting user data")
    // HARDCODED
    // Requires server call here to access user data based on the userId given
    const user = {
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
      }
    return user
}