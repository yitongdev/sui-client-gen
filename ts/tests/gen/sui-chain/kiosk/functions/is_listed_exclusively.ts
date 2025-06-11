import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface IsListedExclusivelyArgs {
  kiosk: TransactionObjectInput;
  id: string | TransactionArgument;
}

/**
 * Move function: `is_listed_exclusively`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param id - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function isListedExclusively(
  tx: Transaction,
  args: IsListedExclusivelyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::is_listed_exclusively`,
    arguments: [obj(tx, args.kiosk), pure(tx, args.id, `${ID.$typeName}`)],
  });
}
