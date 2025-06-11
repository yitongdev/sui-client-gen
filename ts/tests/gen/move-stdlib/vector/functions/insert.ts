import { GenericArg, generic, pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InsertArgs {
  v: Array<GenericArg> | TransactionArgument;
  e: GenericArg;
  i: bigint | TransactionArgument;
}

/**
 * Move function: `insert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param v - Function parameter
 * @param e - Function parameter
 * @param i - Function parameter
 */
export function insert(
  tx: Transaction,
  typeArg: string,
  args: InsertArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::insert`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${typeArg}`, args.v),
      generic(tx, `${typeArg}`, args.e),
      pure(tx, args.i, `u64`),
    ],
  });
}
