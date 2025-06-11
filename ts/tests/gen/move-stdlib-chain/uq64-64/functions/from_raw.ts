import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `from_raw`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq64_64`
 *
 * @param tx - The transaction object
 * @param u128 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fromRaw(
  tx: Transaction,
  u128: bigint | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::uq64_64::from_raw`,
    arguments: [pure(tx, u128, `u128`)],
  });
}
