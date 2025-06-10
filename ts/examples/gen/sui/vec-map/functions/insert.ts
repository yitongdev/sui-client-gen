import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface InsertArgs {
  self: TransactionObjectInput;
  key: GenericArg;
  value: GenericArg;
}

/**
 * Move function: `insert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param key - Function parameter
 * @param value - Function parameter
 */
export function insert(
  tx: Transaction,
  typeArgs: [string, string],
  args: InsertArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::insert`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.self),
      generic(tx, `${typeArgs[0]}`, args.key),
      generic(tx, `${typeArgs[1]}`, args.value),
    ],
  });
}
