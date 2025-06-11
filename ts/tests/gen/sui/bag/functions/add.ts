import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddArgs {
  bag: TransactionObjectInput;
  k: GenericArg;
  v: GenericArg;
}

/**
 * Move function: `add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bag`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param bag - Function parameter
 * @param k - Function parameter
 * @param v - Function parameter
 */
export function add(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bag::add`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.bag),
      generic(tx, `${typeArgs[0]}`, args.k),
      generic(tx, `${typeArgs[1]}`, args.v),
    ],
  });
}
