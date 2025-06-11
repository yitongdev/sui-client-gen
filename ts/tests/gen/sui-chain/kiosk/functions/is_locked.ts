import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface IsLockedArgs {
  kiosk: TransactionObjectInput;
  id: string | TransactionArgument;
}

/**
 * Move function: `is_locked`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param id - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function isLocked(
  tx: Transaction,
  args: IsLockedArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::is_locked`,
    arguments: [obj(tx, args.kiosk), pure(tx, args.id, `${ID.$typeName}`)],
  });
}
