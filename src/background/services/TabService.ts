import { OPEN_TAB } from "../../common/types/Message.type";

class TabService {
  constructor() {
    this.addListeners();
  }

  openNewTab(url: string) {
    chrome.tabs.create({ url });
  }

  private onRuntimeMessage(message: { type: string; url: string }) {
    switch (message.type) {
      case OPEN_TAB:
        this.openNewTab(message.url)
        break;

      default:
        break;
    }

    return false;
  }

  private addListeners() {
    chrome.runtime.onMessage.addListener(this.onRuntimeMessage);
  }
}

export default new TabService();
