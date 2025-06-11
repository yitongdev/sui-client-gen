import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `sqrt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u16`
 *
 * @param tx - The transaction object
 * @param u16 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function sqrt(
  tx: Transaction,
  u16: number | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u16::sqrt`,
    arguments: [pure(tx, u16, `u16`)],
  });
}
