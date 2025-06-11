import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `string`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::ascii`
 *
 * @param tx - The transaction object
 * @param bytes - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function string(
  tx: Transaction,
  bytes: Array<number | TransactionArgument> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ascii::string`,
    arguments: [pure(tx, bytes, `vector<u8>`)],
  });
}
