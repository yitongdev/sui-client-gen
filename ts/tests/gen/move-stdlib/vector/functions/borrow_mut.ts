import { GenericArg, pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface BorrowMutArgs {
  v: Array<GenericArg> | TransactionArgument;
  i: bigint | TransactionArgument;
}

/**
 * Move function: `borrow_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param v - Function parameter
 * @param i - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowMut(
  tx: Transaction,
  typeArg: string,
  args: BorrowMutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::borrow_mut`,
    typeArguments: [typeArg],
    arguments: [vector(tx, `${typeArg}`, args.v), pure(tx, args.i, `u64`)],
  });
}
