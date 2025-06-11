import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface HasItemWithTypeArgs {
  kiosk: TransactionObjectInput;
  id: string | TransactionArgument;
}

/**
 * Move function: `has_item_with_type`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param id - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function hasItemWithType(
  tx: Transaction,
  typeArg: string,
  args: HasItemWithTypeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::has_item_with_type`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.kiosk), pure(tx, args.id, `${ID.$typeName}`)],
  });
}
