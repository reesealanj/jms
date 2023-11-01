export function sliceData<T>(
  tableData: T[],
  page: number,
  rowsPerPage: number
) {
  return tableData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
}
