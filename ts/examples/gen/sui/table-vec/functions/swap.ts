import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface SwapArgs {
  t: TransactionObjectInput;
  i: bigint | TransactionArgument;
  j: bigint | TransactionArgument;
}

/**
 * Move function: `swap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 * @param i - Function parameter
 * @param j - Function parameter
 */
export function swap(tx: Transaction, typeArg: string, args: SwapArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::swap`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.t),
      pure(tx, args.i, `u64`),
      pure(tx, args.j, `u64`),
    ],
  });
}
