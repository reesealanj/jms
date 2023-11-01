import { useState, useEffect } from "react";
import { calculateTableRange } from "../util/calculate-table-range";
import { sliceData } from "../util/slice-data";

export function useTable<T>(data: T[], page: number, rowsPerPage: number) {
  const [tableRange, setTableRange] = useState<number[]>([]);
  const [slice, setSlice] = useState<T[]>([]);

  useEffect(() => {
    const range = calculateTableRange(data, rowsPerPage);
    setTableRange([...range]);
    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
  }, [data, page, rowsPerPage]);

  return { slice, range: tableRange };
}
