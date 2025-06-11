import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateArgs {
  initVersion: bigint | TransactionArgument;
  initValue: GenericArg;
}

/**
 * Move function: `create`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::versioned`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param initVersion - Function parameter
 * @param initValue - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function create(
  tx: Transaction,
  typeArg: string,
  args: CreateArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::versioned::create`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.initVersion, `u64`),
      generic(tx, `${typeArg}`, args.initValue),
    ],
  });
}
