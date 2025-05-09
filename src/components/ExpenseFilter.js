function ExpenseFilter({ selectedYear, onChangeYear }) {
  return (
    <div>
      <label>Filter by year: </label>
      <select value={selectedYear} onChange={(e) => onChangeYear(e.target.value)}>
        <option value="All">All</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
