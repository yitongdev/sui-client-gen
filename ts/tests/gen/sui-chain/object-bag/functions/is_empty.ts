import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `is_empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object_bag`
 *
 * @param tx - The transaction object
 * @param objectBag - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function isEmpty(
  tx: Transaction,
  objectBag: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object_bag::is_empty`,
    arguments: [obj(tx, objectBag)],
  });
}
