import React, { ChangeEvent } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  searchChange,
}: SearchBoxProps) => (
  <div className="pa2">
    <input
      className={`pa3 ba b--green bg-lightest-blue ${className} `}
      type="search"
      placeholder={placeholder}
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;
