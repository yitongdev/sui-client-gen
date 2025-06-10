import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface BorrowArgs {
  object: TransactionObjectInput;
  name: GenericArg;
}

/**
 * Move function: `borrow`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam Name - Type parameter 0
 * @typeParam Value - Type parameter 1
 * @param tx - The transaction object
 * @param object - Function parameter
 * @param name - Function parameter
 */
export function borrow(
  tx: Transaction,
  typeArgs: [string, string],
  args: BorrowArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::borrow`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.object), generic(tx, `${typeArgs[0]}`, args.name)],
  });
}
