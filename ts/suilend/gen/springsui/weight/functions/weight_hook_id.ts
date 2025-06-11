import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `weight_hook_id`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 *
 * @param tx - The transaction object
 * @param registryInfo - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function weightHookId(
  tx: Transaction,
  registryInfo: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::weight::weight_hook_id`,
    arguments: [obj(tx, registryInfo)],
  });
}
