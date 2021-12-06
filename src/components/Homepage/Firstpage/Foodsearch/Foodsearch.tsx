import "./Foodsearch.scss";

const Foodsearch = () => {
  return (
    <div className="food-searchbox-container">
      <input
        type="text"
        name="food-search"
        placeholder="Search your restaurant or cuisines"
      />
    </div>
  );
};
export default Foodsearch;
