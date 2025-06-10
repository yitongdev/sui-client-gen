import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface GetMutArgs {
  self: TransactionObjectInput;
  key: GenericArg;
}

/**
 * Move function: `get_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param key - Function parameter
 */
export function getMut(
  tx: Transaction,
  typeArgs: [string, string],
  args: GetMutArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::get_mut`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.self), generic(tx, `${typeArgs[0]}`, args.key)],
  });
}
