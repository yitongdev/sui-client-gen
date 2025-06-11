import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CurrentOutflowArgs {
  rateLimiter: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `current_outflow`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::rate_limiter`
 *
 * @param tx - The transaction object
 * @param rateLimiter - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function currentOutflow(
  tx: Transaction,
  args: CurrentOutflowArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::rate_limiter::current_outflow`,
    arguments: [obj(tx, args.rateLimiter), pure(tx, args.u64, `u64`)],
  });
}
