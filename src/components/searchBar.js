
function SearchBar() {
    return (
        <>
            <div className="searchContainer">
                <div className="searchBar">
                    <div className="">
                        <button className="searchButton">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <div>
                        <input className="searchInput" name="searchInput"/>
                    </div>
                </div>
                <div className="searchLogin">
                    <div>
                        <i class="far fa-user searchIcon"></i>
                    </div>
                    <div>
                        <button class="searchLoginButton">
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar;