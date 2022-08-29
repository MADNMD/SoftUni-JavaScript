function upvotesVsDownvotes(getVotes) {
let result = getVotes.upVotes - getVotes.downVotes;
console.log(result);
}
upvotesVsDownvotes({ upVotes: 2, downVotes: 10 });

// let values = Object.values(getVotes);
// let upVote = values.shift();
// let downVotes = values.shift();
// let result = upVote - downVotes;
// console.log(result);