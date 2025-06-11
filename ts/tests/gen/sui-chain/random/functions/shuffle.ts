import { GenericArg, obj, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ShuffleArgs {
  randomGenerator: TransactionObjectInput;
  vecT0: Array<GenericArg> | TransactionArgument;
}

/**
 * Move function: `shuffle`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param randomGenerator - Function parameter
 * @param vecT0 - Function parameter
 */
export function shuffle(
  tx: Transaction,
  typeArg: string,
  args: ShuffleArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::shuffle`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.randomGenerator),
      vector(tx, `${typeArg}`, args.vecT0),
    ],
  });
}
