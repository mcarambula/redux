import { saveLikeToggle } from '../utils/api';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOOGLE_TWEET = 'TOOGLE_TWEET';

export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

function toggleTweet({id, authedUser, hasLiked}){
    return {
        type: TOOGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

//Async action creator
export function handleToggleTweet (info) {
    return (dispatch) => {
        dispatch(toggleTweet(info))
        return saveLikeToggle(info)
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e)
                dispatch(toggleTweet(info))
                alert('The was an error liking the tweet. Try again.')
            });
    }
}
