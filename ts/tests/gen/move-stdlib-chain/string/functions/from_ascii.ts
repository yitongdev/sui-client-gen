import { pure } from "../../../_framework/util.js";
import { String } from "../../ascii/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `from_ascii`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param string - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fromAscii(
  tx: Transaction,
  string: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::from_ascii`,
    arguments: [pure(tx, string, `${String.$typeName}`)],
  });
}
