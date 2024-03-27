import client from "./common/client";
import { ParamsProps, TagsTypeResponse } from "../types/tagsType";
import { errorTostify } from "../utils/errorUtils";

export const fetchTags = async ({
  page,
  pageSize,
  sortField,
  sortOrder,
}: ParamsProps) => {
  const params = {
    page: page,
    pageSize: pageSize,
    order: sortOrder,
    sort: sortField,
    site: "stackoverflow",
  };

  try {
    const response = await client.get<TagsTypeResponse>("/tags", {
      params,
    });
    return {
      hasMore: response.data.has_more,
      tags: response.data.items.map(
        (item: { name: string; count: number }) => ({
          name: item.name,
          count: item.count,
        })
      ),
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    errorTostify(
      `Status:${err.response.status}, message: ${err.response.data.error_message}`
    );
  }
};
