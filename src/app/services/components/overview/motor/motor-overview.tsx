"use client";

import { IconActionButton } from "@/components/ui/action-icon-button/action-icon-button";
import MotorCard from "./motor-card";

export default function MotorOverview(props: { editable?: boolean }) {
  return (
    <div className="border rounded-md p-4 space-y-2">
      <h3 className="text-lg font-semibold">Motor</h3>
      <div className="space-y-2">
        <MotorCard index={1} editable={props.editable} />
        <MotorCard index={2} editable={props.editable} />
        <MotorCard index={3} editable={props.editable} />
      </div>
      {props.editable && <IconActionButton variant="create" type="custom" />}
    </div>
  );
}
