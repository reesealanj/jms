"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { ChevronsUpDown } from "lucide-react";

export default function CollapsableServiceSummary() {
  return (
    <Card>
      <Collapsible className="space-y-2 py-2" defaultOpen={true}>
        <div className="flex items-center justify-between space-x-4 px-4">
          <CardTitle>Ticket Summary</CardTitle>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Ticket Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="total-parts">Total Parts</Label>
                <Input disabled id="total-parts" placeholder="10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="total-hours">Total Hours of Service</Label>
                <Input disabled id="total-hours" placeholder="5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subtotal">Subtotal</Label>
                <Input disabled id="subtotal" placeholder="$500.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="total-post-tax">Total Post Tax</Label>
                <Input disabled id="total-post-tax" placeholder="$550.00" />
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
