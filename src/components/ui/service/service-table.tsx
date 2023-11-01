"use client";

import { Button } from "@/components/ui/button";
import { IconActionButton } from "@/components/ui/icon-action-button";
import { useServiceListQuery } from "@/lib/hooks/useServiceListQuery";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SKELETON_SIZING } from "@/lib/constants/skeleton-classes";
import { Service } from "@/lib/types/service";
import { useTable } from "@/lib/hooks/useTable";

const TABLE_SIZE = 10;

export function ServiceTable({ data }: { data?: Service[] }) {
  return (
    <div className="flex-1 rounded-lg mt-4 border bg-card text-card-foreground shadow-sm mx-auto w-full">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2">Service ID</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((service, index) => {
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
        </tbody>
      </table>
      {/* <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <Button
                className={`mr-1 ${page > 1 ? "visible" : "invisible"}`}
                variant="outline"
                onClick={() => setPage(page - 1)}
              >
                Previous
              </Button>
              <Button
                className={`ml-1 ${
                  !isLoading &&
                  !isError &&
                  serviceListResponse &&
                  page * TABLE_SIZE < serviceListResponse?.count
                    ? "visible"
                    : "invisible"
                }`}
                variant="outline"
                onClick={() => setPage(page + 1)}
              >
                Next
              </Button>
            </div>
            {!isLoading && !isError && serviceListResponse && (
              <p className="text-sm text-gray-700 text-center">
                Showing {page * TABLE_SIZE - TABLE_SIZE + 1} to{" "}
                {page * TABLE_SIZE < serviceListResponse?.count
                  ? page * TABLE_SIZE
                  : serviceListResponse?.count}{" "}
                of {serviceListResponse?.count} entries
              </p>
            )}
          </div>
        </div> */}
    </div>
  );
}
