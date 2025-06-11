import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface HasAccessArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `has_access`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function hasAccess(
  tx: Transaction,
  args: HasAccessArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::has_access`,
    arguments: [obj(tx, args.self), obj(tx, args.cap)],
  });
}
