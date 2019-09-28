import React from "react";
import * as PropTypes from "prop-types";
import {PostSection, SearchSection, SearchWrapper} from "./searchStyle.js";
import FatText from "../../component/fatText/fatText.js";
import Loader from "../../component/loader/loader.js";
import UserCard from "../../component/userCard/userCard.js";
import SquarePost from "../../component/squarePost/squarePost.js";

const SearchPresenter = ({searchTerm, loading, data}) => {
    if (searchTerm === undefined) {
        return (
            <SearchWrapper>
                <FatText text="Search for something"/>
            </SearchWrapper>
        );
    } else if (loading === true) {
        return (
            <SearchWrapper>
                <Loader/>
            </SearchWrapper>
        );
    } else if (data && data.searchUser && data.searchPost) {
        return (
            <SearchWrapper>
                <SearchSection>
                    {data.searchUser.length === 0 ?
                        (<FatText text="No Users Found"/>)
                        :
                        (data.searchUser.map(user => (
                                <UserCard key={user.id}
                                          id={user.id}
                                          username={user.username}
                                          isFollowing={user.isFollowing}
                                          url={user.avatar}
                                          isSelf={user.isSelf}/>
                            ))
                        )
                    }
                </SearchSection>
                <PostSection>
                    {data.searchPost.length === 0 ? (
                        <FatText text="No Posts Found"/>
                    ) : (
                        data.searchPost.map(post => (
                            <SquarePost
                                key={post.id}
                                likeCount={post.likeCount}
                                commentCount={post.commentCount}
                                file={post.files[0]}
                            />
                        ))
                    )}
                </PostSection>
            </SearchWrapper>
        );
    }
};

SearchPresenter.propTypes = {
    searchTerm: PropTypes.string,
    loading: PropTypes.bool
};

export default SearchPresenter;