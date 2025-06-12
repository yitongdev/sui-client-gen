import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface BorrowForNextEpochMutArgs {
  config: TransactionObjectInput;
  t0: GenericArg;
  t1: GenericArg;
}

/**
 * Move function: `borrow_for_next_epoch_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::config`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @param tx - The transaction object
 * @param config - Function parameter
 * @param t0 - Function parameter
 * @param t1 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowForNextEpochMut(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: BorrowForNextEpochMutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::config::borrow_for_next_epoch_mut`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.config),
      generic(tx, `${typeArgs[0]}`, args.t0),
      generic(tx, `${typeArgs[1]}`, args.t1),
    ],
  });
}
