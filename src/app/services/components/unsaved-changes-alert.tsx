"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useService } from "@/context/current-service";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function UnsavedChangesAlert() {
  const { service } = useService();

  return (
    <Alert variant="default" className="bg-red-500 text-white">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="font-bold">Warning: Unsaved Changes</AlertTitle>
      <AlertDescription>
        <p className="italic">
          You have unsaved changes on this service! Leaving this page will cause
          your changes to be lost! You can save or discard the changes and
          return to view only mode using the buttons below.
        </p>
        <div className="flex space-x-2 w-full mt-4">
          <Button
            className="bg-green-500 hover:bg-green-600 hover:text-gray-200 text-white w-full"
            variant="default"
          >
            Save Changes
          </Button>
          <Link href={`/services/${service?.id}`} className="w-full">
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 hover:text-gray-200 text-white w-full"
              variant="default"
            >
              Discard Changes
            </Button>
          </Link>
        </div>
      </AlertDescription>
    </Alert>
  );
}
