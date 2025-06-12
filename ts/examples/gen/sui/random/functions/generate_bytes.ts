import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GenerateBytesArgs {
  g: TransactionObjectInput;
  numOfBytes: number | TransactionArgument;
}

/**
 * Move function: `generate_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param g - Function parameter
 * @param numOfBytes - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function generateBytes(tx: Transaction, args: GenerateBytesArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::generate_bytes`,
    arguments: [obj(tx, args.g), pure(tx, args.numOfBytes, `u16`)],
  });
}
