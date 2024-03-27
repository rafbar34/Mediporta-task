import { SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

import styles from "./data-controls-section.module.scss";
import {
  ORDER_ITEMS_DATA,
  SORT_ITEMS_DATA,
} from "../../../lib/constants/dataControls";
import { DataControlsSectionProps } from "../../../lib/types/dataControlsType";
import { inputNumberValidations } from "../../../lib/utils/validations";
import { DataControlsFactory } from "../DataControlsFactory";

export const DataControlsSection = ({
  sortField,
  sortOrder,
  pageSize,
  setSortField,
  setSortOrder,
  setPageSize,
}: DataControlsSectionProps) => {
  const [timeoutPageSize, setTimeoutPageSize] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleChangeField = (event: SelectChangeEvent<string>) => {
    setSortField(event.target.value as string);
  };

  const handleChangeOrder = (event: SelectChangeEvent<string>) => {
    setSortOrder(event.target.value as string);
  };
  const handleChangePageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isCorrect = inputNumberValidations(Number(event.target.value));
    if (!isCorrect) {
      setPageSize(10);
      if (timeoutPageSize) {
        clearTimeout(timeoutPageSize);
      }
      return;
    }

    if (timeoutPageSize) {
      clearTimeout(timeoutPageSize);
    }
    const newTimeout = setTimeout(() => {
      setPageSize(Number(event.target.value));
    }, 700);

    setTimeoutPageSize(newTimeout);
  };

  return (
    <div className={styles["data-controls-container"]}>
      <DataControlsFactory
        type="select"
        title="Sort by "
        handleChange={handleChangeField}
        value={sortField}
        items={SORT_ITEMS_DATA}
        testId="sortId"
      />
      <DataControlsFactory
        type="select"
        title="Order  "
        handleChange={handleChangeOrder}
        value={sortOrder}
        items={ORDER_ITEMS_DATA[sortField as keyof typeof ORDER_ITEMS_DATA]}
        testId="orderId"
      />
      <DataControlsFactory
        type="input"
        title="Items per page  "
        handleChange={handleChangePageSize}
        value={pageSize}
        testId="inputId"
      />
    </div>
  );
};
