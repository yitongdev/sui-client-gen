import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `from_scaled_val`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::decimal`
 *
 * @param tx - The transaction object
 * @param u256 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fromScaledVal(
  tx: Transaction,
  u256: bigint | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::decimal::from_scaled_val`,
    arguments: [pure(tx, u256, `u256`)],
  });
}
