import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { String } from "../index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param s - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function bytes(tx: Transaction, s: string | TransactionArgument): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::bytes`,
    arguments: [pure(tx, s, `${String.$typeName}`)],
  });
}
