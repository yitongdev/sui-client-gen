import { GenericArg, generic, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PushBackArgs {
  v: Array<GenericArg> | TransactionArgument;
  e: GenericArg;
}

/**
 * Move function: `push_back`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param v - Function parameter
 * @param e - Function parameter
 */
export function pushBack(
  tx: Transaction,
  typeArg: string,
  args: PushBackArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::push_back`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${typeArg}`, args.v),
      generic(tx, `${typeArg}`, args.e),
    ],
  });
}
