export interface Prompt {
  id: string;
  value: string;
  userId?: string;
}

/**
 * A prompt with an answer
 */
export interface Conversation {
  id: string;
  promptId?: string;
  promptValue: string;
  modelResponseId?: string
  modelResponse?: string;
  userId?: string;
}
