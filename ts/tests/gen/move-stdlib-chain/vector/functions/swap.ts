import { GenericArg, pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SwapArgs {
  vecT0: Array<GenericArg> | TransactionArgument;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `swap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecT0 - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 */
export function swap(
  tx: Transaction,
  typeArg: string,
  args: SwapArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::swap`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${typeArg}`, args.vecT0),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
    ],
  });
}
