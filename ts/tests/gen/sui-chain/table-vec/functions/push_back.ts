import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface PushBackArgs {
  tableVec: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `push_back`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tableVec - Function parameter
 * @param t0 - Function parameter
 */
export function pushBack(tx: Transaction, typeArg: string, args: PushBackArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::push_back`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.tableVec), generic(tx, `${typeArg}`, args.t0)],
  });
}
