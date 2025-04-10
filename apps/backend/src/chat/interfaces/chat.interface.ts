export interface OllamaResponse {
  response: string;
  model?: string;
  created_at?: string;
  done?: boolean;
  context?: number[];
  total_duration?: number;
  load_duration?: number;
  sample_count?: number;
  sample_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

export interface DummyApiResponse {
  id: number;
  title: string;
  body?: string;
  userId?: number;
}
