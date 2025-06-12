import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface ValueIdArgs {
  bag: TransactionObjectInput;
  k: GenericArg;
}

/**
 * Move function: `value_id`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object_bag`
 *
 * @typeParam K - Type parameter 0
 * @param tx - The transaction object
 * @param bag - Function parameter
 * @param k - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function valueId(tx: Transaction, typeArg: string, args: ValueIdArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object_bag::value_id`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.bag), generic(tx, `${typeArg}`, args.k)],
  });
}
