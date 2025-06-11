import { GenericArg, generic, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PushBackArgs {
  vecT0: Array<GenericArg> | TransactionArgument;
  t0: GenericArg;
}

/**
 * Move function: `push_back`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecT0 - Function parameter
 * @param t0 - Function parameter
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
      vector(tx, `${typeArg}`, args.vecT0),
      generic(tx, `${typeArg}`, args.t0),
    ],
  });
}
