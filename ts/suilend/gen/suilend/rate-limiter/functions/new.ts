import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface NewArgs {
  rateLimiterConfig: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `new`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::rate_limiter`
 *
 * @param tx - The transaction object
 * @param rateLimiterConfig - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function new_(tx: Transaction, args: NewArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::rate_limiter::new`,
    arguments: [obj(tx, args.rateLimiterConfig), pure(tx, args.u64, `u64`)],
  });
}
