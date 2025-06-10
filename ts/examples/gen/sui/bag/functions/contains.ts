import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ContainsArgs {
  bag: TransactionObjectInput;
  k: GenericArg;
}

/**
 * Move function: `contains`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bag`
 *
 * @typeParam K - Type parameter 0
 * @param tx - The transaction object
 * @param bag - Function parameter
 * @param k - Function parameter
 */
export function contains(tx: Transaction, typeArg: string, args: ContainsArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bag::contains`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.bag), generic(tx, `${typeArg}`, args.k)],
  });
}
