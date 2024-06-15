import React, { useState } from "react";

function FilteredNotes({ sortBy, onSort }) {
  return (
      <select value={sortBy} onChange={onSort}>
        <option value="latest">sort based on latest notes</option>
        <option value="earliest">sort based on earliest notes</option>
        <option value="completed">sort based on completed notes</option>
      </select>
  );
}

export default FilteredNotes;
