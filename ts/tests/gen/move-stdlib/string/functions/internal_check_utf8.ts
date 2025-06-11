import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `internal_check_utf8`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param v - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalCheckUtf8(
  tx: Transaction,
  v: Array<number | TransactionArgument> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::internal_check_utf8`,
    arguments: [pure(tx, v, `vector<u8>`)],
  });
}
