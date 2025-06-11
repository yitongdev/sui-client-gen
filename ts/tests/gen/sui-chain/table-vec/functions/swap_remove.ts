import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SwapRemoveArgs {
  tableVec: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `swap_remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tableVec - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function swapRemove(
  tx: Transaction,
  typeArg: string,
  args: SwapRemoveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::swap_remove`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.tableVec), pure(tx, args.u64, `u64`)],
  });
}
