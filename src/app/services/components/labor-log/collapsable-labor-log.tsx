"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import LaborLogTable from "./labor-log-table";

export default function CollapsableLaborLog() {
  return (
    <Card>
      <Collapsible className="space-y-2 py-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <CardTitle>Labor Log</CardTitle>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="p-4 space-y-2">
            <LaborLogTable />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
