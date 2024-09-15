import { Subject } from "rxjs";

export interface MessageEvent {
  sender: string;
  receiver: string;
  message: string;
}

declare global {
  interface Window {
    eventBus?: Subject<MessageEvent>;
  }
}

if (!window.eventBus) {
  window.eventBus = new Subject();
}

export const eventBus = window.eventBus;
