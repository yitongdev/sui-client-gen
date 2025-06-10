import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface HasChildObjectWithTyArgs {
  parent: string | TransactionArgument;
  id: string | TransactionArgument;
}

/**
 * Move function: `has_child_object_with_ty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam Child - Type parameter 0
 * @param tx - The transaction object
 * @param parent - Function parameter
 * @param id - Function parameter
 */
export function hasChildObjectWithTy(
  tx: Transaction,
  typeArg: string,
  args: HasChildObjectWithTyArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::has_child_object_with_ty`,
    typeArguments: [typeArg],
    arguments: [pure(tx, args.parent, `address`), pure(tx, args.id, `address`)],
  });
}
