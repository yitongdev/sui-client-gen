import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UidMutAsOwnerArgs {
  kiosk: TransactionObjectInput;
  kioskOwnerCap: TransactionObjectInput;
}

/**
 * Move function: `uid_mut_as_owner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param kioskOwnerCap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function uidMutAsOwner(
  tx: Transaction,
  args: UidMutAsOwnerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::uid_mut_as_owner`,
    arguments: [obj(tx, args.kiosk), obj(tx, args.kioskOwnerCap)],
  });
}
