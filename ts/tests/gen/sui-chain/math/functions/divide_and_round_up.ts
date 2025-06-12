import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface DivideAndRoundUpArgs {
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `divide_and_round_up`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::math`
 *
 * @param tx - The transaction object
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function divideAndRoundUp(tx: Transaction, args: DivideAndRoundUpArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::math::divide_and_round_up`,
    arguments: [pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`)],
  });
}
