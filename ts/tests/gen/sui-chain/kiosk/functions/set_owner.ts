import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetOwnerArgs {
  kiosk: TransactionObjectInput;
  kioskOwnerCap: TransactionObjectInput;
}

/**
 * Move function: `set_owner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param kioskOwnerCap - Function parameter
 * @param txContext - Function parameter
 */
export function setOwner(
  tx: Transaction,
  args: SetOwnerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::set_owner`,
    arguments: [obj(tx, args.kiosk), obj(tx, args.kioskOwnerCap)],
  });
}
