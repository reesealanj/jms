import { IconActionButton } from "@/components/ui/action-icon-button/action-icon-button";

export default function MotorCard(props: {
  editable?: boolean;
  index: number;
}) {
  return (
    <div className="border rounded-md p-2 space-y-2">
      <p className="text-zinc-500 dark:text-zinc-400">Motor {props.index}</p>
      <div className="flex space-x-2">
        <IconActionButton variant="microscope" type="custom" />
        {props.editable && <IconActionButton variant="edit" type="custom" />}
        {props.editable && <IconActionButton variant="delete" type="custom" />}
      </div>
    </div>
  );
}
