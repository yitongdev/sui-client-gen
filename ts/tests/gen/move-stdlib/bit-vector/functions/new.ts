import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `new`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::bit_vector`
 *
 * @param tx - The transaction object
 * @param length - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function new_(
  tx: Transaction,
  length: bigint | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bit_vector::new`,
    arguments: [pure(tx, length, `u64`)],
  });
}
