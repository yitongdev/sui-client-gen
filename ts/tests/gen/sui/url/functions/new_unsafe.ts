import { pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib/ascii/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `new_unsafe`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::url`
 *
 * @param tx - The transaction object
 * @param url - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newUnsafe(tx: Transaction, url: string | TransactionArgument): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::url::new_unsafe`,
    arguments: [pure(tx, url, `${String.$typeName}`)],
  });
}
