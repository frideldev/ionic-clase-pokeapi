interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface RequestPayload {
  messages: Message[];
  temperature: number;
  top_p: number;
  max_new_tokens: number;
}
