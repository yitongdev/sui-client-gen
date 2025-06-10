import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface AddChildObjectArgs {
  parent: string | TransactionArgument;
  child: GenericArg;
}

/**
 * Move function: `add_child_object`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam Child - Type parameter 0
 * @param tx - The transaction object
 * @param parent - Function parameter
 * @param child - Function parameter
 */
export function addChildObject(
  tx: Transaction,
  typeArg: string,
  args: AddChildObjectArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::add_child_object`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.parent, `address`),
      generic(tx, `${typeArg}`, args.child),
    ],
  });
}
