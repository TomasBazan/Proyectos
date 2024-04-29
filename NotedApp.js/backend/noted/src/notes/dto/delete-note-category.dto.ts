import { IsNumber, IsOptional } from 'class-validator';

export class DeleteNoteCategoryDto {
  @IsNumber()
  @IsOptional()
  idCategory: number;
}
