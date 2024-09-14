import React, { useEffect, useState } from "react";
import { eventBus, MessageEvent } from "./event-bus";

type Props = {
  name: string;
  target: string;
};

export default function App({ name, target }: Props) {
  const [messages, setMessages] = useState<string[]>([]);

  const handleClick = () => {
    eventBus.next({
      sender: name,
      receiver: target,
      message: `Hello from ${name} ${new Date().toString()}`,
    });
  };

  useEffect(() => {
    const subscription = eventBus.subscribe(
      ({ sender, receiver, message }: MessageEvent) => {
        if (receiver == name) {
          setMessages((messages) => [...messages, message]);
        }
      }
    );

    // Clean up subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Send message to {target}</button>
      <p>Messages from {target}</p>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
