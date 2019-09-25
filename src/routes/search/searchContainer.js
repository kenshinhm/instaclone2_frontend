import React from "react";
import {withRouter} from "react-router-dom";
import {useQuery} from "react-apollo-hooks";
import {SEARCH} from "./searchQuery.js";
import SearchPresenter from "./searchPresenter.js";

const Search = (({location: {search}}) => {
    const term = search.split("=")[1];
    const {data, loading} = useQuery(SEARCH, {
        skip: term === undefined,
        variables: {
            term
        }
    });
    return <SearchPresenter searchTerm={term}
                            loading={loading}
                            data={data}/>;
});

export default withRouter(Search);