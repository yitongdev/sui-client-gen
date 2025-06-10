import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ContainsWithTypeArgs {
  bag: TransactionObjectInput;
  k: GenericArg;
}

/**
 * Move function: `contains_with_type`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object_bag`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param bag - Function parameter
 * @param k - Function parameter
 */
export function containsWithType(
  tx: Transaction,
  typeArgs: [string, string],
  args: ContainsWithTypeArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object_bag::contains_with_type`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.bag), generic(tx, `${typeArgs[0]}`, args.k)],
  });
}
