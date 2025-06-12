import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface NewConfigArgs {
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `new_config`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::rate_limiter`
 *
 * @param tx - The transaction object
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newConfig(tx: Transaction, args: NewConfigArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::rate_limiter::new_config`,
    arguments: [pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`)],
  });
}
