import React from "react";
import "./search.scss";

const Search = ({ onChange, value }) => {
	return (
		<div className="search">
			Filtrar:{" "}
			<input value={value} onChange={(e) => onChange(e.target.value)} />
		</div>
	);
};

export default Search;
