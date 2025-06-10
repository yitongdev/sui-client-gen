import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface IsLockedArgs {
  self: TransactionObjectInput;
  id: string | TransactionArgument;
}

/**
 * Move function: `is_locked`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param id - Function parameter
 */
export function isLocked(tx: Transaction, args: IsLockedArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::is_locked`,
    arguments: [obj(tx, args.self), pure(tx, args.id, `${ID.$typeName}`)],
  });
}
