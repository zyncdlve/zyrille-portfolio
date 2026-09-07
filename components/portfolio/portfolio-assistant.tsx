"use client";

import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import { ArrowUpRight, Bot, Loader2, Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { FormEvent, useState } from "react";

export function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const isLoading = status === "submitted" || status === "streaming";
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <div className="assistant-widget">
      {open && (
        <section className="assistant-panel" aria-label="Portfolio assistant">
          <header className="assistant-header">
            <div>
              <span className="assistant-kicker">
                <Bot size={13} /> Portfolio assistant
              </span>
              <h2>Ask me anything.</h2>
            </div>
            <button
              className="assistant-close"
              onClick={() => setOpen(false)}
              aria-label="Close portfolio assistant"
            >
              <X size={18} />
            </button>
          </header>
          <div className="assistant-messages" aria-live="polite">
            {messages.length === 0 && (
              <div className="assistant-empty">
                <p>
                  I can tell you about Zyrille&apos;s work, process, stack, and
                  availability.
                </p>
                <div className="assistant-suggestions">
                  <button
                    onClick={() =>
                      sendMessage({
                        text: "What kind of work does Zyrille do?",
                      })
                    }
                  >
                    What kind of work do you do?
                  </button>
                  <button
                    onClick={() =>
                      sendMessage({ text: "What is your tech stack?" })
                    }
                  >
                    What is your tech stack?
                  </button>
                </div>
              </div>
            )}
            {messages.map((message) => (
              <div
                className={`assistant-message ${message.role}`}
                key={message.id}
              >
                {message.parts?.map((part, index) =>
                  part.type === "text" ? (
                    <div
                      className="assistant-markdown"
                      key={`${message.id}-${index}`}
                    >
                      <ReactMarkdown>{part.text}</ReactMarkdown>
                    </div>
                  ) : null,
                )}
              </div>
            ))}
            {isLoading && (
              <div className="assistant-message assistant-loading">
                <Loader2 size={15} className="spin" /> Thinking…
              </div>
            )}
          </div>
          <form className="assistant-form" onSubmit={submit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about the portfolio…"
              aria-label="Ask the portfolio assistant"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </section>
      )}
      <button
        className="assistant-launcher"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={
          open ? "Close portfolio assistant" : "Open portfolio assistant"
        }
      >
        {open ? (
          <X size={20} />
        ) : (
          <>
            <Bot size={19} />
            <span>Ask about my work</span>
            <ArrowUpRight size={15} />
          </>
        )}
      </button>
    </div>
  );
}
