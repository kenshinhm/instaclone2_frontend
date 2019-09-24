import React from "react";
import {Link, withRouter} from "react-router-dom";
import useInput from "../../hooks/useInput.js";
import {HeaderColumn, HeaderContainer, HeaderLink, HeaderWrapper, SearchInput} from "./headerStyle.js";
import {CompassIcon, HeartEmptyIcon, LogoIcon, UserIcon} from "../icons/icons.js";
import {useQuery} from "react-apollo-hooks";
import {ME_QUERY} from "../../shared/query.js";

const Header = ({history}) => {
    const search = useInput("");
    const {data} = useQuery(ME_QUERY);
    const onSearchSubmit = e => {
        e.preventDefault();
        history.push(`/search?term=${search.value}`);
    };
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderColumn>
                    <Link to="/">
                        <LogoIcon/>
                    </Link>
                </HeaderColumn>
                <HeaderColumn>
                    <form onSubmit={onSearchSubmit}>
                        <SearchInput value={search.value}
                                     onChange={search.onChange}
                                     placeholder="Search"/>
                    </form>
                </HeaderColumn>
                <HeaderColumn>
                    <HeaderLink to="/explore">
                        <CompassIcon/>
                    </HeaderLink>
                    <HeaderLink to="/notification">
                        <HeartEmptyIcon/>
                    </HeaderLink>
                    {data && data.me ? (
                        <HeaderLink to={data.me.username}>
                            <UserIcon/>
                        </HeaderLink>
                    ) : (
                        <HeaderLink to="/#">
                            <UserIcon/>
                        </HeaderLink>
                    )}
                </HeaderColumn>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default withRouter(Header);