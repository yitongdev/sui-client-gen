import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

export interface CreateWithTwoGenericsArgs {
  t0: GenericArg;
  t1: GenericArg;
}

/**
 * Move function: `create_with_two_generics`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param t1 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createWithTwoGenerics(
  tx: Transaction,
  typeArgs: [string, string],
  args: CreateWithTwoGenericsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixture::create_with_two_generics`,
    typeArguments: typeArgs,
    arguments: [generic(tx, `${typeArgs[0]}`, args.t0), generic(tx, `${typeArgs[1]}`, args.t1)],
  });
}
