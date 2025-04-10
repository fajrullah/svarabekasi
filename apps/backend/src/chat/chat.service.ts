import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { OllamaGenerateResponse } from './interfaces/ollama-response.interface';

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);

  async generate(prompt: string): Promise<string> {
    try {
      const res: AxiosResponse<OllamaGenerateResponse> = await axios.post(
        'http://localhost:11434/api/generate',
        {
          model: 'llama2',
          prompt,
          stream: false,
        },
      );

      this.logger.log(`Ollama response: ${res.data.response}`);
      return res.data.response;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        this.logger.error(
          `Ollama API error: ${error.message}`,
          JSON.stringify(error.response?.data ?? {}),
        );
      } else if (error instanceof Error) {
        this.logger.error(`Unexpected error: ${error.message}`, error.stack);
      } else {
        this.logger.error('Unknown error occurred in generate()');
      }

      throw new Error('Failed to communicate with Ollama');
    }
  }
}
