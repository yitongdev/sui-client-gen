import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PurchaseArgs {
  self: TransactionObjectInput;
  id: string | TransactionArgument;
  payment: TransactionObjectInput;
}

/**
 * Move function: `purchase`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param id - Function parameter
 * @param payment - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function purchase(tx: Transaction, typeArg: string, args: PurchaseArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::purchase`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), pure(tx, args.id, `${ID.$typeName}`), obj(tx, args.payment)],
  });
}
