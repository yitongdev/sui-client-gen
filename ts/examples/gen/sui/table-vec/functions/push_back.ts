import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface PushBackArgs {
  t: TransactionObjectInput;
  e: GenericArg;
}

/**
 * Move function: `push_back`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 * @param e - Function parameter
 */
export function pushBack(tx: Transaction, typeArg: string, args: PushBackArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::push_back`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.t), generic(tx, `${typeArg}`, args.e)],
  });
}
