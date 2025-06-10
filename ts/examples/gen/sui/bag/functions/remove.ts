import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface RemoveArgs {
  bag: TransactionObjectInput;
  k: GenericArg;
}

/**
 * Move function: `remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bag`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param bag - Function parameter
 * @param k - Function parameter
 */
export function remove(
  tx: Transaction,
  typeArgs: [string, string],
  args: RemoveArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bag::remove`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.bag), generic(tx, `${typeArgs[0]}`, args.k)],
  });
}
