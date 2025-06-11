import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `from_u128`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::decimal`
 *
 * @param tx - The transaction object
 * @param u128 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fromU128(
  tx: Transaction,
  u128: bigint | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::decimal::from_u128`,
    arguments: [pure(tx, u128, `u128`)],
  });
}
