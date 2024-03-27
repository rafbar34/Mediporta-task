export type SortDataType = {
  name: string;
  value: "name" | "popular";
};
export type OrderDataType = {
  [key: string]: {
    name: string;
    value: "asc" | "desc";
  }[];
};

export type DataControlsFactoryProps = {
  value: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  type?: "select" | "input";
  items?: { name: string; value: string | number }[];
  testId: string;
};
export type DataControlsSectionProps = {
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  setSortField: React.Dispatch<React.SetStateAction<string>>;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  sortOrder: string;
  sortField: string;
  pageSize: number;
};
