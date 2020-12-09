// Methods in this file are used in the ProposalsToStory component

const log = console.log;

export const getStoryProposals = (storyId) => {
  const url = `/proposals/${storyId}`;

  // Since this is a GET request, simply call fetch on the URL
  await fetch(url)
      .then(res => {
          if (res.status === 200) {
              // return a promise that resolves with the JSON body
              const proposalsJSON = await res.json();
              // map through the proposalsJSON object and turn it into an array of proposals and return it
              const proposals = proposalsJSON.map((proposal) => {
                return {
                  proposeToID: proposal.proposeToID,
                  proposeToTitle: proposal.proposeToTitle,
                  proposeByID: proposal.proposeByID,
                  proposeByUsername: proposal.proposeByUsername,
                  proposeChapter: proposal.proposeChapter,
                  visibility: proposal.visibility,
                  content: proposal.content,
                  status: proposal.status
                }
              })
              return proposals
          } else {
              alert("Could not get proposals or story");
          }
      })
      .catch(error => {
          console.log(error);
      });

};
