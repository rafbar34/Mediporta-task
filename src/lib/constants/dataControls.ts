import { OrderDataType, SortDataType } from "../types/dataControlsType";

export const SORT_ITEMS_DATA: SortDataType[] = [
  { name: "Name", value: "name" },
  { name: "Count", value: "popular" },
];

export const ORDER_ITEMS_DATA: OrderDataType = {
  popular: [
    { name: "Ascending ", value: "asc" },
    { name: "Descending", value: "desc" },
  ],
  name: [
    { name: "A-Z ", value: "asc" },
    { name: "Z-A", value: "desc" },
  ],
};
