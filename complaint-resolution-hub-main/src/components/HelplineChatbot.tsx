import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  from: "user" | "bot";
}

const botResponses: Record<string, string> = {
  hello: "Hello! 👋 How can I help you today?",
  hi: "Hi there! How can I assist you?",
  status: "You can check your complaint status on the Complaints page. Each complaint shows its current status: Pending, In Progress, or Resolved.",
  submit: "To submit a new complaint, go to 'Submit Complaint' from the sidebar, fill in your details and description, then click Submit.",
  track: "Navigate to the Complaints page to see all your complaints and their current statuses. You can also search and filter them.",
  contact: "You can reach our support team at support@complaintdesk.com or call our helpline at +91 1800-123-4567 (Mon–Sat, 9AM–6PM).",
  hours: "Our helpline operates Monday to Saturday, 9:00 AM to 6:00 PM IST.",
  delete: "Only administrators can delete complaints. If you need a complaint removed, please contact the admin team.",
  category: "We support these categories: Service Quality, Billing, Technical Issue, Staff Behavior, Delivery, and Other.",
  help: "I can help you with:\n• Submitting complaints\n• Tracking complaint status\n• Contact information\n• Category information\n\nJust type your question!",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(botResponses)) {
    if (lower.includes(key)) return response;
  }
  return "I'm not sure I understand. Try asking about: submitting complaints, tracking status, contact info, or type 'help' for options.";
}

export default function HelplineChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: "Hello! 👋 I'm the ComplaintDesk assistant. How can I help you today? Type 'help' for options.", from: "bot" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input.trim(), from: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const botMsg: Message = { id: Date.now() + 1, text: getBotResponse(userMsg.text), from: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed bottom-20 right-6 z-50 w-80 h-96 bg-card border border-border rounded-lg shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-border bg-accent text-accent-foreground">
              <p className="text-sm font-semibold">Helpline Assistant</p>
              <p className="text-xs opacity-80">We typically reply instantly</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-lg text-xs whitespace-pre-line ${
                      m.from === "user"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-2 border-t border-border flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="text-xs h-8"
              />
              <Button size="icon" className="h-8 w-8 bg-accent text-accent-foreground hover:bg-accent/90" onClick={send}>
                <Send size={14} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
