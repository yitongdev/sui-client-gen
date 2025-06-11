import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `scalar_from_u64`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function scalarFromU64(
  tx: Transaction,
  u64: bigint | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::scalar_from_u64`,
    arguments: [pure(tx, u64, `u64`)],
  });
}
