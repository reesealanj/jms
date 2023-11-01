import { useEffect } from "react";
import { Button } from "../button";

export function TableFooter<T>({
  range,
  setPage,
}: {
  range: number[];
  setPage: (newPage: number) => void;
}) {
  return (
    <div className="mx-auto mt-2">
      {range.map((newPage, idx) => {
        return (
          <Button key={idx} onClick={() => setPage(newPage)}>
            {newPage}
          </Button>
        );
      })}
    </div>
  );
}
