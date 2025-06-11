import { GenericArg, pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RemoveArgs {
  vecT0: Array<GenericArg> | TransactionArgument;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecT0 - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function remove(
  tx: Transaction,
  typeArg: string,
  args: RemoveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::remove`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${typeArg}`, args.vecT0),
      pure(tx, args.u64, `u64`),
    ],
  });
}
