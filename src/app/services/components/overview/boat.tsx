"use client";

import { IconActionButton } from "@/components/ui/action-icon-button/action-icon-button";

export default function BoatOverview(props: { editable?: boolean }) {
  return (
    <div className="border rounded-md p-4 space-y-2">
      <h3 className="text-lg font-semibold">Boat</h3>
      <p className="text-zinc-500 dark:text-zinc-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex space-x-2">
        <IconActionButton variant="microscope" type="custom" />
        {props.editable && <IconActionButton variant="edit" type="custom" />}
        {props.editable && <IconActionButton variant="delete" type="custom" />}
        {props.editable && <IconActionButton variant="create" type="custom" />}
      </div>
    </div>
  );
}
