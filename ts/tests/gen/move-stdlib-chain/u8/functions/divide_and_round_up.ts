import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DivideAndRoundUpArgs {
  u81: number | TransactionArgument;
  u82: number | TransactionArgument;
}

/**
 * Move function: `divide_and_round_up`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u8`
 *
 * @param tx - The transaction object
 * @param u81 - Function parameter
 * @param u82 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function divideAndRoundUp(
  tx: Transaction,
  args: DivideAndRoundUpArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u8::divide_and_round_up`,
    arguments: [pure(tx, args.u81, `u8`), pure(tx, args.u82, `u8`)],
  });
}
