export interface Prompt {
  id: string;
  value: string;
  userId?: string;
}

/**
 * A prompt with an answer
 */
export interface Chat {
  id: string;
  promptId: string;
  answer?: string;
  userId?: string;
}
