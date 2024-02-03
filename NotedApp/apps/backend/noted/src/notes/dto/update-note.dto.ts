import {
  Length,
  IsString,
  MinLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class UpdateNoteDto {
  @IsString()
  @MinLength(1)
  @IsOptional()
  @Length(1, 100)
  title?: string;

  @IsString()
  @IsOptional()
  @Length(1, 1000)
  content?: string;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;
}
