import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MinArgs {
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `min`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::math`
 *
 * @param tx - The transaction object
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function min(tx: Transaction, args: MinArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::math::min`,
    arguments: [pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`)],
  });
}
