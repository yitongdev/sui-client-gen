import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface EqualArgs {
  e1: TransactionObjectInput;
  e2: TransactionObjectInput;
}

/**
 * Move function: `equal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam G - Type parameter 0
 * @param tx - The transaction object
 * @param e1 - Function parameter
 * @param e2 - Function parameter
 */
export function equal(tx: Transaction, typeArg: string, args: EqualArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::equal`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.e1), obj(tx, args.e2)],
  });
}
