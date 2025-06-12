import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface RemoveChildObjectArgs {
  parent: string | TransactionArgument;
  id: string | TransactionArgument;
}

/**
 * Move function: `remove_child_object`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam Child - Type parameter 0
 * @param tx - The transaction object
 * @param parent - Function parameter
 * @param id - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function removeChildObject(
  tx: Transaction,
  typeArg: string,
  args: RemoveChildObjectArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::remove_child_object`,
    typeArguments: [typeArg],
    arguments: [pure(tx, args.parent, `address`), pure(tx, args.id, `address`)],
  });
}
