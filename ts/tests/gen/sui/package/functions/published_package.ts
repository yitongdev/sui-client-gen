import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `published_package`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function publishedPackage(tx: Transaction, self: TransactionObjectInput): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::published_package`,
    arguments: [obj(tx, self)],
  });
}
