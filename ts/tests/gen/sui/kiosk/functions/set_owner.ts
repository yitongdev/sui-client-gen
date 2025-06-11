import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetOwnerArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `set_owner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param ctx - Function parameter
 */
export function setOwner(
  tx: Transaction,
  args: SetOwnerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::set_owner`,
    arguments: [obj(tx, args.self), obj(tx, args.cap)],
  });
}
