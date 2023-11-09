"use client";

import { IconActionButton } from "@/components/ui/action-icon-button/action-icon-button";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

export default function CollapsablePartsLog() {
  return (
    <Card>
      <Collapsible className="space-y-2 py-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <CardTitle>Parts</CardTitle>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="p-4 space-y-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Part Number</TableHead>
                  <TableHead>Part Name</TableHead>
                  <TableHead>Comments</TableHead>
                  <TableHead>Tax Free</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>12345</TableCell>
                  <TableCell>Part A</TableCell>
                  <TableCell>Lorem ipsum dolor sit amet.</TableCell>
                  <TableCell className="text-center">
                    <Checkbox id="tax-free-1" />
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <IconActionButton variant="edit" type="custom" />
                      <IconActionButton variant="delete" type="custom" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>67890</TableCell>
                  <TableCell>Part B</TableCell>
                  <TableCell>Consectetur adipiscing elit.</TableCell>
                  <TableCell>
                    <Checkbox id="tax-free-2" />
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <IconActionButton variant="edit" type="custom" />
                      <IconActionButton variant="delete" type="custom" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11111</TableCell>
                  <TableCell>Part C</TableCell>
                  <TableCell>Sed do eiusmod tempor incididunt.</TableCell>
                  <TableCell>
                    <Checkbox id="tax-free-3" />
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <IconActionButton variant="edit" type="custom" />
                      <IconActionButton variant="delete" type="custom" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>22222</TableCell>
                  <TableCell>Part D</TableCell>
                  <TableCell>Ut enim ad minim veniam.</TableCell>
                  <TableCell>
                    <Checkbox id="tax-free-4" />
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <IconActionButton variant="edit" type="custom" />
                      <IconActionButton variant="delete" type="custom" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>33333</TableCell>
                  <TableCell>Part E</TableCell>
                  <TableCell>Quis nostrud exercitation ullamco.</TableCell>
                  <TableCell>
                    <Checkbox id="tax-free-5" />
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <IconActionButton variant="edit" type="custom" />
                      <IconActionButton variant="delete" type="custom" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>44444</TableCell>
                  <TableCell>Part F</TableCell>
                  <TableCell>Laboris nisi ut aliquip ex ea commodo.</TableCell>
                  <TableCell>
                    <Checkbox id="tax-free-6" />
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <IconActionButton variant="edit" type="custom" />
                      <IconActionButton variant="delete" type="custom" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>55555</TableCell>
                  <TableCell>Part G</TableCell>
                  <TableCell>Duis aute irure dolor in reprehenderit.</TableCell>
                  <TableCell>
                    <Checkbox id="tax-free-7" />
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <IconActionButton variant="edit" type="custom" />
                      <IconActionButton variant="delete" type="custom" />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
