import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateOrderDTO {
  id: string;
  client: string;
  address: string;
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  clientId: string;
}