import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateArgs {
  u64: bigint | TransactionArgument;
  t0: GenericArg;
}

/**
 * Move function: `create`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::versioned`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param u64 - Function parameter
 * @param t0 - Function parameter
 * @param txContext - Function parameter
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
    arguments: [pure(tx, args.u64, `u64`), generic(tx, `${typeArg}`, args.t0)],
  });
}
