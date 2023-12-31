"use client";

import { Color, Size } from "@/types";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  return <div>Filter</div>;
};

export default Filter;
