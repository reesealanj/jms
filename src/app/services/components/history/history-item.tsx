import { ItemType } from "./types";
import { getLeadIcon } from "@/app/services/components/history/utils/get-lead-icon";
import { getContentLeadText } from "@/app/services/components/history/utils/get-content-lead-text";

export default function ServiceHistoryItem(props: {
  name: string;
  date: string;
  content?: string;
  itemType: ItemType;
}) {
  const icon = getLeadIcon(props.itemType);
  const contentLead = getContentLeadText(props.itemType);

  return (
    <div className="w-full p-1 space-y-1 flex items-start text-sm italic">
      {icon}
      <div className="w-full">
        <p className="text-zinc-500 dark:text-zinc-400">
          {props.name} on {props.date}
        </p>
        <p>
          <span className="font-bold">{contentLead}</span> {props.content}
        </p>
      </div>
    </div>
  );
}
