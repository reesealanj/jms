import { ItemType } from "../types";

export function getContentLeadText(itemType: ItemType) {
  switch (itemType) {
    case "add": {
      return "Added:";
    }
    case "remove": {
      return "Removed:";
    }
    case "comment": {
      return "Commented:";
    }
    case "modify": {
      return "Modified:";
    }
    case "start": {
      return "Created Service";
    }
    case "close": {
      return "Closed Service";
    }
    case "status": {
      return "Updated Status:";
    }
    case "contact": {
      return "Contacted Customer:";
    }
  }
}
