import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DivideAndRoundUpArgs {
  u2561: bigint | TransactionArgument;
  u2562: bigint | TransactionArgument;
}

/**
 * Move function: `divide_and_round_up`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u256`
 *
 * @param tx - The transaction object
 * @param u2561 - Function parameter
 * @param u2562 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function divideAndRoundUp(
  tx: Transaction,
  args: DivideAndRoundUpArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u256::divide_and_round_up`,
    arguments: [pure(tx, args.u2561, `u256`), pure(tx, args.u2562, `u256`)],
  });
}
