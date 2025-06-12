import { GenericArg, generic, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface ContainsArgs {
  vecT0: Array<GenericArg> | TransactionArgument;
  t0: GenericArg;
}

/**
 * Move function: `contains`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecT0 - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function contains(tx: Transaction, typeArg: string, args: ContainsArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::contains`,
    typeArguments: [typeArg],
    arguments: [vector(tx, `${typeArg}`, args.vecT0), generic(tx, `${typeArg}`, args.t0)],
  });
}
