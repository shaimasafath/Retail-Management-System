import React, { useState } from "react";

const FilterPanel = ({ queryState, onChange }) => {
  const [localAgeMin, setLocalAgeMin] = useState(queryState.ageMin);
  const [localAgeMax, setLocalAgeMax] = useState(queryState.ageMax);

  const handleCheckboxChange = (key, value) => {
    const current = new Set(queryState[key]);
    if (current.has(value)) current.delete(value);
    else current.add(value);
    onChange({ [key]: Array.from(current), page: 1 });
  };

  const applyAge = () => {
    onChange({ ageMin: localAgeMin, ageMax: localAgeMax, page: 1 });
  };

  return (
    <div className="filter-panel">
      {/* Region example */}
      <section>
        <h4>Customer Region</h4>
        {/* Replace below hard-coded values with dynamic options if you like */}
        {["North", "South", "East", "West"].map((region) => (
          <label key={region}>
            <input
              type="checkbox"
              checked={queryState.region.includes(region)}
              onChange={() => handleCheckboxChange("region", region)}
            />
            {region}
          </label>
        ))}
      </section>

      {/* Gender */}
      <section>
        <h4>Gender</h4>
        {["Male", "Female", "Other"].map((gender) => (
          <label key={gender}>
            <input
              type="checkbox"
              checked={queryState.gender.includes(gender)}
              onChange={() => handleCheckboxChange("gender", gender)}
            />
            {gender}
          </label>
        ))}
      </section>

      {/* Age range */}
      <section>
        <h4>Age Range</h4>
        <div className="age-range">
          <input
            type="number"
            placeholder="Min"
            value={localAgeMin}
            onChange={(e) => setLocalAgeMin(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            value={localAgeMax}
            onChange={(e) => setLocalAgeMax(e.target.value)}
          />
          <button type="button" onClick={applyAge}>
            Apply
          </button>
        </div>
      </section>

      {/* Date range */}
      <section>
        <h4>Date Range</h4>
        <input
          type="date"
          value={queryState.dateFrom}
          onChange={(e) => onChange({ dateFrom: e.target.value, page: 1 })}
        />
        <input
          type="date"
          value={queryState.dateTo}
          onChange={(e) => onChange({ dateTo: e.target.value, page: 1 })}
        />
      </section>

      {/* Similarly add Product Category, Tags, Payment Method */}
    </div>
  );
};

export default FilterPanel;
