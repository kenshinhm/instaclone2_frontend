import React from "react";
import * as PropTypes from "prop-types";
import FatText from "../../component/fatText/fatText.js";
import {SearchWrapper} from "./searchStyle.js";

const SearchPresenter = ({searchTerm, loading}) => (
    <SearchWrapper>
        {searchTerm === undefined && <FatText text={"Search for something"}/>}
    </SearchWrapper>
);

SearchPresenter.propTypes = {
    searchTerm: PropTypes.string,
    loading: PropTypes.bool
};

export default SearchPresenter;