import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `to_uppercase`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::ascii`
 *
 * @param tx - The transaction object
 * @param string - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function toUppercase(
  tx: Transaction,
  string: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ascii::to_uppercase`,
    arguments: [pure(tx, string, `${String.$typeName}`)],
  });
}
