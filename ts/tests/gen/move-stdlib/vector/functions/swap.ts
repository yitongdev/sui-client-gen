import { GenericArg, pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface SwapArgs {
  v: Array<GenericArg> | TransactionArgument;
  i: bigint | TransactionArgument;
  j: bigint | TransactionArgument;
}

/**
 * Move function: `swap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param v - Function parameter
 * @param i - Function parameter
 * @param j - Function parameter
 */
export function swap(tx: Transaction, typeArg: string, args: SwapArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::swap`,
    typeArguments: [typeArg],
    arguments: [vector(tx, `${typeArg}`, args.v), pure(tx, args.i, `u64`), pure(tx, args.j, `u64`)],
  });
}
