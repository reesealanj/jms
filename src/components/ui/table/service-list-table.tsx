"use client";

import { useTable } from "@/lib/hooks/useTable";
import { useState } from "react";
import { IconActionButton } from "../icon-action-button";
import { Service } from "@/lib/types/service";
import { TableFooter } from "./table-footer";
import { TableRowsPerPage } from "@/components/table-rows-per-page";
import { calculateTableRange } from "@/lib/util/calculate-table-range";

export function ServiceListTable<T>({
  data,
  rowsPerPage,
}: {
  data: Service[];
  rowsPerPage: number;
}) {
  const [page, setPage] = useState(1);
  const [rpp, setRpp] = useState(rowsPerPage);
  const { slice, range } = useTable<Service>(data, page, rpp);

  function setNewRowsPerPage(num: number) {
    if (num === -1) {
      setPage(1);
      setRpp(data.length);
      return;
    }
    const range = calculateTableRange(data, num);
    if (!range.includes(page)) {
      setPage(1);
      setRpp(num);
      return;
    }
    setRpp(num);
  }
  function renderEmptyRows(num: number) {
    const el = [];
    for (let i = 0; i < num; i++) {
      el.push(
        <tr className="invisible" key={i}>
          <td className="p-2">placeholder</td>
          <td className="p-2">placeholder</td>
          <td className="p-2">placeholder</td>
          <td className="p-2">
            <IconActionButton variant="edit" href={`/services/test/edit`} />
            <IconActionButton variant="details" href={`/services/test`} />
          </td>
        </tr>
      );
    }

    return el;
  }

  return (
    <div className="rounded-xl mt-8 py-8 border bg-card text-card-foreground shadow-sm mx-auto w-full">
      <div className="w-full flex">
        <TableRowsPerPage setValue={setNewRowsPerPage} />
        <p className="text-sm text-gray-700 text-center mt-4">
          Showing {page * rpp - rpp + 1} to{" "}
          {page * rpp < data.length ? page * rpp : data.length} of {data.length}{" "}
          services.
        </p>
      </div>

      <table className="w-full mx-auto">
        <thead className="text-center">
          <tr>
            <th className="p-2">Service ID</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {slice.map((service) => {
            return (
              <tr key={`service-item-${service.id}`}>
                <td className="p-2">{service.id}</td>
                <td className="p-2">{service.name}</td>
                <td className="p-2">{service.status}</td>
                <td className="p-2">
                  <IconActionButton
                    variant="edit"
                    href={`/services/${service.id}/edit`}
                  />
                  <IconActionButton
                    variant="details"
                    href={`/services/${service.id}`}
                  />
                </td>
              </tr>
            );
          })}
          {slice.length < rpp &&
            renderEmptyRows(rpp - slice.length).map((row) => row)}
        </tbody>
      </table>
      <div className="mx-auto flex flex-col">
        <p className="text-sm text-gray-700 text-center mt-4">
          Showing {page * rpp - rpp + 1} to{" "}
          {page * rpp < data.length ? page * rpp : data.length} of {data.length}{" "}
          services.
        </p>
        <TableFooter range={range} setPage={setPage} />
      </div>
    </div>
  );
}
