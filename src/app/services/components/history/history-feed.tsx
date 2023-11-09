import ServiceHistoryItem from "./history-item";

export function HistoryFeed() {
  return (
    <div className="w-full h-auto p-4 space-y-2 overflow-auto flex justify-between items-start">
      <div className="space-y-2 w-full border-l-4">
        <ServiceHistoryItem
          name="Reese Jones"
          date="10-31-2023"
          itemType="comment"
          content="This is the content of the comment I left"
        />
        <ServiceHistoryItem
          name="Reese Jones"
          date="11-01-2023"
          itemType="add"
          content="5 items"
        />
        <ServiceHistoryItem
          name="Reese Jones"
          date="11-01-2023"
          itemType="remove"
          content="1 items"
        />
        <ServiceHistoryItem
          name="Reese Jones"
          date="11-01-2023"
          itemType="modify"
          content="1 items"
        />
        <ServiceHistoryItem
          name="Reese Jones"
          date="11-01-2023"
          itemType="start"
        />
        <ServiceHistoryItem
          name="Reese Jones"
          date="11-01-2023"
          itemType="close"
        />
        <ServiceHistoryItem
          name="Reese Jones"
          date="11-01-2023"
          itemType="status"
          content="From 'Open' to 'In progress'"
        />
        <ServiceHistoryItem
          name="Reese Jones"
          date="11-01-2023"
          itemType="contact"
          content="Notified that we're waiting for parts. No answer, left message"
        />
      </div>
    </div>
  );
}
