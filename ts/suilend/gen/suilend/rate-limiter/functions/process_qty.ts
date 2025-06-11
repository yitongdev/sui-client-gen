import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ProcessQtyArgs {
  rateLimiter: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  decimal: TransactionObjectInput;
}

/**
 * Move function: `process_qty`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::rate_limiter`
 *
 * @param tx - The transaction object
 * @param rateLimiter - Function parameter
 * @param u64 - Function parameter
 * @param decimal - Function parameter
 */
export function processQty(
  tx: Transaction,
  args: ProcessQtyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::rate_limiter::process_qty`,
    arguments: [
      obj(tx, args.rateLimiter),
      pure(tx, args.u64, `u64`),
      obj(tx, args.decimal),
    ],
  });
}
