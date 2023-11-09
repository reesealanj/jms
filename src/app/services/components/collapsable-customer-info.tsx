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

export default function CollapsableCustomerInformation(props: {
  editable?: boolean;
}) {
  return (
    <Card>
      <Collapsible className="space-y-2 py-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <CardTitle>Customer Information</CardTitle>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input disabled id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input disabled id="last-name" placeholder="Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input disabled id="phone" placeholder="+1 234 567 890" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled
                id="email"
                placeholder="john.doe@example.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Ticket Status</Label>
              <Input disabled id="status" placeholder="Open" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="start-date">Start Date</Label>
              <Input disabled id="start-date" placeholder="2023-01-01" />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
