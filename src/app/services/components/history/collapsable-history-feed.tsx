"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { HistoryFeed } from "./history-feed";

export default function CollapsableHistoryFeed() {
  return (
    <Card>
      <Collapsible className="space-y-2 py-2" defaultOpen={true}>
        <div className="flex items-center justify-between space-x-4 px-4">
          <CardTitle>Update History</CardTitle>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <HistoryFeed />
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
