import {
  IsNotEmpty,
  IsString,
  //  Length,
  IsUUID,
} from 'class-validator';

export class CreateOrderDTO {
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