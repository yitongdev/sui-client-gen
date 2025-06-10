import { GenericArg, obj, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface ShuffleArgs {
  g: TransactionObjectInput;
  v: Array<GenericArg> | TransactionArgument;
}

/**
 * Move function: `shuffle`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param g - Function parameter
 * @param v - Function parameter
 */
export function shuffle(tx: Transaction, typeArg: string, args: ShuffleArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::shuffle`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.g), vector(tx, `${typeArg}`, args.v)],
  });
}
