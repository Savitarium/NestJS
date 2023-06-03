import {
  IsNotEmpty,
  IsString, IsUUID
} from "class-validator";

export class CreateOrderDTO {
  client: string;
  address: string;
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;
  clientId: string;
}