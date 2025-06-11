import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `item_count`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function itemCount(
  tx: Transaction,
  self: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::item_count`,
    arguments: [obj(tx, self)],
  });
}
