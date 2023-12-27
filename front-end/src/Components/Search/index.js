import { useNavigate, useSearchParams } from "react-router-dom";
function Search(){
    const navigate = useNavigate();
   const handleSearch = async (e)=>
   {
    e.preventDefault();
    const search =  e.target.elements.search.value;
    navigate(`/products/search?q=${search}`);
   }
    return(
        <>
        <form onSubmit={handleSearch}>
        <div className="header__search">
              <input name="search" type="text" placeholder="Tìm kiếm sản phẩm" />
              <div className="header__button">
                <button  className="button__search">
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
        </form>

        </>
    )
}
export default Search;