import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface ContainsArgs {
  objectBag: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `contains`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object_bag`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param objectBag - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function contains(tx: Transaction, typeArg: string, args: ContainsArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object_bag::contains`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.objectBag), generic(tx, `${typeArg}`, args.t0)],
  });
}
