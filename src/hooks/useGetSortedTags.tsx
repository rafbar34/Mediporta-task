import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { fetchTags } from "../lib/api/tags.service";
import { ParamsProps } from "../lib/types/tagsType";

export const useGetSortedTags = ({
  page,
  pageSize,
  sortField,
  sortOrder,
}: ParamsProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tags", page, pageSize, sortField, sortOrder],
    queryFn: () => fetchTags({ page, pageSize, sortField, sortOrder }),
    placeholderData: keepPreviousData,
  });
  return { data, isLoading, isError };
};
