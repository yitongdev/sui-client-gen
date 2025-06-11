import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `sqrt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::math`
 *
 * @param tx - The transaction object
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function sqrt(
  tx: Transaction,
  u64: bigint | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::math::sqrt`,
    arguments: [pure(tx, u64, `u64`)],
  });
}
