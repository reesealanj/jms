export function calculateTableRange<T>(tableData: T[], rowsPerPage: number) {
  const range = [];
  const number = Math.ceil(tableData.length / rowsPerPage);
  for (let i = 1; i <= number; i++) {
    range.push(i);
  }
  return range;
}
