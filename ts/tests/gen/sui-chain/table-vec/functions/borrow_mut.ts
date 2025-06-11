import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface BorrowMutArgs {
  tableVec: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `borrow_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tableVec - Function parameter
 * @param u64 - Function parameter
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
    arguments: [obj(tx, args.tableVec), pure(tx, args.u64, `u64`)],
  });
}
