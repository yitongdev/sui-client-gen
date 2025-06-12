import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface MaxArgs {
  u2561: bigint | TransactionArgument;
  u2562: bigint | TransactionArgument;
}

/**
 * Move function: `max`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u256`
 *
 * @param tx - The transaction object
 * @param u2561 - Function parameter
 * @param u2562 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function max(tx: Transaction, args: MaxArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u256::max`,
    arguments: [pure(tx, args.u2561, `u256`), pure(tx, args.u2562, `u256`)],
  });
}
