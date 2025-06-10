import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

export interface CreateWithTwoGenericsArgs {
  genericField1: GenericArg;
  genericField2: GenericArg;
}

/**
 * Move function: `create_with_two_generics`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T - Type parameter 0
 * @typeParam U - Type parameter 1
 * @param tx - The transaction object
 * @param genericField1 - Function parameter
 * @param genericField2 - Function parameter
 */
export function createWithTwoGenerics(
  tx: Transaction,
  typeArgs: [string, string],
  args: CreateWithTwoGenericsArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixture::create_with_two_generics`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[0]}`, args.genericField1),
      generic(tx, `${typeArgs[1]}`, args.genericField2),
    ],
  });
}
