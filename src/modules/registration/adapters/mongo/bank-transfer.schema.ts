import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BankTransferDocument = TransferSchema & Document;

@Schema()
export class TransferSchema {
  @Prop({ required: true })
  bankName: string;

  @Prop({ required: true })
  accountNumber: string;

  @Prop()
  accountHolderName?: string; // Optional field

  @Prop()
  branch?: string; // Optional field
}

export const BankTransferSchema = SchemaFactory.createForClass(TransferSchema);
