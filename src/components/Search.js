const Search = () => {
    return (
        <header>
            <h2 className="header__title">Search it. Explore it. Buy it.</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Enter an address, neighbourhood, city, or PIN code"
            />
        </header>
    );
}

export default Search;