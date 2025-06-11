import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface BorrowMutArgs {
  t: TransactionObjectInput;
  i: bigint | TransactionArgument;
}

/**
 * Move function: `borrow_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 * @param i - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowMut(
  tx: Transaction,
  typeArg: string,
  args: BorrowMutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::borrow_mut`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.t), pure(tx, args.i, `u64`)],
  });
}
