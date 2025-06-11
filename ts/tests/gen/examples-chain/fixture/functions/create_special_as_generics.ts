import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

export interface CreateSpecialAsGenericsArgs {
  t0: GenericArg;
  t1: GenericArg;
  t2: GenericArg;
  t3: GenericArg;
  t4: GenericArg;
  t5: GenericArg;
  t6: GenericArg;
  t7: GenericArg;
}

/**
 * Move function: `create_special_as_generics`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @typeParam T3 - Type parameter 3
 * @typeParam T4 - Type parameter 4
 * @typeParam T5 - Type parameter 5
 * @typeParam T6 - Type parameter 6
 * @typeParam T7 - Type parameter 7
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param t1 - Function parameter
 * @param t2 - Function parameter
 * @param t3 - Function parameter
 * @param t4 - Function parameter
 * @param t5 - Function parameter
 * @param t6 - Function parameter
 * @param t7 - Function parameter
 * @param txContext - Function parameter
 */
export function createSpecialAsGenerics(
  tx: Transaction,
  typeArgs: [string, string, string, string, string, string, string, string],
  args: CreateSpecialAsGenericsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixture::create_special_as_generics`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[0]}`, args.t0),
      generic(tx, `${typeArgs[1]}`, args.t1),
      generic(tx, `${typeArgs[2]}`, args.t2),
      generic(tx, `${typeArgs[3]}`, args.t3),
      generic(tx, `${typeArgs[4]}`, args.t4),
      generic(tx, `${typeArgs[5]}`, args.t5),
      generic(tx, `${typeArgs[6]}`, args.t6),
      generic(tx, `${typeArgs[7]}`, args.t7),
    ],
  });
}
