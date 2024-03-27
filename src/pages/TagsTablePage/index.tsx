import { useState } from "react";

import { DataControlsSection } from "../../components/DataControls/DataControlsSection";
import Pagination from "../../components/Pagination";
import { TagsTableContainer } from "../../components/Table/TagsTableContainer";
import { Loader } from "../../components/UI/Loader";
import { useGetSortedTags } from "../../hooks/useGetSortedTags";
import styles from "../TagsTablePage/tags-table-page.module.scss";
import { ErrorPage } from "../../components/UI/ErrorPage";

export const TagsTablePage = () => {
  const [sortField, setSortField] = useState("name");
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState<number>(1);

  const { data, isError, isLoading } = useGetSortedTags({
    page,
    pageSize,
    sortField,
    sortOrder,
  });

  if (isError) return <ErrorPage />;

  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["box"]} glass-effect`}>
        <h1 className={styles["header"]}>Tags</h1>
        <DataControlsSection
          setSortField={setSortField}
          setSortOrder={setSortOrder}
          sortField={sortField}
          sortOrder={sortOrder}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles["table"]}>
            <TagsTableContainer tags={data && data?.tags} />
            <div className={styles["pagination"]}>
              <Pagination
                setPage={setPage}
                page={page}
                hasMore={!!data && data?.hasMore}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
