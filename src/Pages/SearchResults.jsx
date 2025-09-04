import { useLocation } from "react-router-dom";

const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const searchTerm = queryParams.get("q");
  const category = queryParams.get("category");

  return (
    <div>
      {searchTerm && <h2>Search Results for: "{searchTerm}"</h2>}
      {category && <h2>Browsing Category: "{category.replace("-", " ")}"</h2>}

     
    </div>
  );
};

export default SearchResultsPage;
