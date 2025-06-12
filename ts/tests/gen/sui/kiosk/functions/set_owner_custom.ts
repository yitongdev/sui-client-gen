import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetOwnerCustomArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  owner: string | TransactionArgument;
}

/**
 * Move function: `set_owner_custom`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param owner - Function parameter
 */
export function setOwnerCustom(tx: Transaction, args: SetOwnerCustomArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::set_owner_custom`,
    arguments: [obj(tx, args.self), obj(tx, args.cap), pure(tx, args.owner, `address`)],
  });
}
