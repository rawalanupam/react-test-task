export const Filter = ({ filterLabel, id, value, onChange, options, className = "" }) => {
  return (
    <>
    <label htmlFor={id} className="mr-2">Filter by {filterLabel}:</label>
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={`border rounded-md py-1 px-2 border-gray-300 shadow ${className}`}
    >
      <option value="">All</option>
      {options.map(({ id, value, label }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </select>
    </>
  );
};