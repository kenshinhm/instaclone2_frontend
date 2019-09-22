import React from "react";
import {useQuery} from "react-apollo-hooks";
import {FEED_QUERY} from "./feedQuery.js";
import {FeedContainer} from "./feedStyle.js";
import Loader from "../../component/loader/loader.js";

const Feed = () => {
    const {data, loading} = useQuery(FEED_QUERY);
    return (
        <FeedContainer>
            {loading && <Loader/>}
        </FeedContainer>
    );
};

export default Feed;