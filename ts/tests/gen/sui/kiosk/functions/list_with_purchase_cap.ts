import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ListWithPurchaseCapArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  id: string | TransactionArgument;
  minPrice: bigint | TransactionArgument;
}

/**
 * Move function: `list_with_purchase_cap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param id - Function parameter
 * @param minPrice - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function listWithPurchaseCap(
  tx: Transaction,
  typeArg: string,
  args: ListWithPurchaseCapArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::list_with_purchase_cap`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      obj(tx, args.cap),
      pure(tx, args.id, `${ID.$typeName}`),
      pure(tx, args.minPrice, `u64`),
    ],
  });
}
