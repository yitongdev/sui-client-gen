import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface DiffArgs {
  u2561: bigint | TransactionArgument;
  u2562: bigint | TransactionArgument;
}

/**
 * Move function: `diff`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u256`
 *
 * @param tx - The transaction object
 * @param u2561 - Function parameter
 * @param u2562 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function diff(tx: Transaction, args: DiffArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u256::diff`,
    arguments: [pure(tx, args.u2561, `u256`), pure(tx, args.u2562, `u256`)],
  });
}
