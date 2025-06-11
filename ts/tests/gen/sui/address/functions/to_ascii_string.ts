import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `to_ascii_string`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::address`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function toAsciiString(
  tx: Transaction,
  a: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::to_ascii_string`,
    arguments: [pure(tx, a, `address`)],
  });
}
