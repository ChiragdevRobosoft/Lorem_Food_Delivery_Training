import "./index.scss";

const Foodsearch = () => {
  return (
    <div className="food-searchbox-container">
      <input
        type="text"
        name="food-search"
        placeholder="Search your restaurant or cuisines"
      />
      <div className="loc-date-container">
        <div className="location-input">
          <input
            type="text"
            name="location"
            placeholder="Downtown Burj Khalifa, Dubai"
          />
          <button />
        </div>
        <div className="date-input">
          <input
            type="text"
            name="date"
            placeholder="Search your restaurant or cuisines"
            value="Today, 28 April, 2018"
          />
          <button />
        </div>
      </div>
    </div>
  );
};
export default Foodsearch;
