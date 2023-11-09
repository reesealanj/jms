"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useService } from "@/context/current-service";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ReadonlyViewAlert() {
  const { service } = useService();

  return (
    <Alert variant="default" className="bg-gray-500 text-white">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="font-bold">Readonly Mode</AlertTitle>
      <AlertDescription>
        <p className="italic">
          You are in read only mode! You cannot make any changes to the
          information in the ticket here! Click the button below to swap to the
          editor view.
        </p>
        <div className="flex space-x-2 w-full mx-auto mt-4">
          <Link href={`/services/${service?.id}/edit`}>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 hover:text-gray-200 text-white w-full"
              variant="default"
            >
              Switch to Edit Mode
            </Button>
          </Link>
        </div>
      </AlertDescription>
    </Alert>
  );
}
