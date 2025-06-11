import { GenericArg, generic, pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InsertArgs {
  vecT0: Array<GenericArg> | TransactionArgument;
  t0: GenericArg;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `insert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecT0 - Function parameter
 * @param t0 - Function parameter
 * @param u64 - Function parameter
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
      vector(tx, `${typeArg}`, args.vecT0),
      generic(tx, `${typeArg}`, args.t0),
      pure(tx, args.u64, `u64`),
    ],
  });
}
