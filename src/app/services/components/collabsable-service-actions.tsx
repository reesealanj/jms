"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

export default function CollapsableServiceActions(props: {
  editable?: boolean;
}) {
  return (
    <Card>
      <Collapsible className="space-y-2 py-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <CardTitle>Actions</CardTitle>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="grid grid-cols-1 gap-4 p-4">
            {props.editable && (
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  Add Part
                </Button>
              </div>
            )}
            {props.editable && (
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  Log Labor
                </Button>
              </div>
            )}
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Generate Invoice PDF
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
