import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface TryGetArgs {
  self: TransactionObjectInput;
  key: GenericArg;
}

/**
 * Move function: `try_get`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param key - Function parameter
 */
export function tryGet(
  tx: Transaction,
  typeArgs: [string, string],
  args: TryGetArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::try_get`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.self), generic(tx, `${typeArgs[0]}`, args.key)],
  });
}
