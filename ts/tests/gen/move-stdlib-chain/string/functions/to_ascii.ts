import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `to_ascii`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param string - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function toAscii(
  tx: Transaction,
  string: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::to_ascii`,
    arguments: [pure(tx, string, `${String.$typeName}`)],
  });
}
