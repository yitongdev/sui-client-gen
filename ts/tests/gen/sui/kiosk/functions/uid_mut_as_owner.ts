import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UidMutAsOwnerArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `uid_mut_as_owner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function uidMutAsOwner(
  tx: Transaction,
  args: UidMutAsOwnerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::uid_mut_as_owner`,
    arguments: [obj(tx, args.self), obj(tx, args.cap)],
  });
}
