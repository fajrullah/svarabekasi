// src/dto/dummy-api-response.dto.ts
import { IsNumber, IsString, IsOptional } from 'class-validator';

export class DummyApiResponseDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  id!: number; // Note: Using definite assignment assertion

  @IsString()
  title!: string;

  @IsString()
  @IsOptional()
  body?: string;

  @IsNumber()
  @IsOptional()
  userId?: number;

  constructor(data: Record<string, unknown>) {
    // Safer than 'any'
    // Type-asserted assignment with fallbacks
    this.id = data.id as number;
    this.title = data.title as string;
    if (data.body) this.body = data.body as string;
    if (data.userId) this.userId = data.userId as number;
  }

  /** Quick validation check */
  static isShapeValid(data: unknown): data is DummyApiResponseDto {
    return (
      typeof data === 'object' &&
      data !== null &&
      'id' in data &&
      'title' in data
    );
  }
}
