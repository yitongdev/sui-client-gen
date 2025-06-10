import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface SwapRemoveArgs {
  t: TransactionObjectInput;
  i: bigint | TransactionArgument;
}

/**
 * Move function: `swap_remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 * @param i - Function parameter
 */
export function swapRemove(
  tx: Transaction,
  typeArg: string,
  args: SwapRemoveArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::swap_remove`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.t), pure(tx, args.i, `u64`)],
  });
}
