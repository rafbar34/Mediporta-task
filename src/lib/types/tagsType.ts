export type ParamsProps = {
  page: number;
  pageSize: number;
  sortField: string;
  sortOrder: string;
};
export type TagsType = { name: string; count: number };

export type TagsTypeResponse = {
  has_more: boolean;
  items: [TagsType];
};
