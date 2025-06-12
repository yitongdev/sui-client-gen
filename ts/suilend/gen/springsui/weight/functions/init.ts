import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `init`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 *
 * @param tx - The transaction object
 * @param weight - Function parameter
 * @param txContext - Function parameter
 */
export function init(tx: Transaction, weight: TransactionObjectInput): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::weight::init`, arguments: [obj(tx, weight)] });
}
