function Filter({ onCategoryChange }) {
  function filterOnChange(e) {
    const filterSelect = e.target.value;
    onCategoryChange(filterSelect);
  }

  return (
    <div className="Filter">
      <select name="filter" onChange={filterOnChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}
export default Filter;
