import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

export interface CreateSpecialAsGenericsArgs {
  string: GenericArg;
  asciiString: GenericArg;
  url: GenericArg;
  idField: GenericArg;
  uid: GenericArg;
  balance: GenericArg;
  option: GenericArg;
  optionNone: GenericArg;
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
 * @param string - Function parameter
 * @param asciiString - Function parameter
 * @param url - Function parameter
 * @param idField - Function parameter
 * @param uid - Function parameter
 * @param balance - Function parameter
 * @param option - Function parameter
 * @param optionNone - Function parameter
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
      generic(tx, `${typeArgs[0]}`, args.string),
      generic(tx, `${typeArgs[1]}`, args.asciiString),
      generic(tx, `${typeArgs[2]}`, args.url),
      generic(tx, `${typeArgs[3]}`, args.idField),
      generic(tx, `${typeArgs[4]}`, args.uid),
      generic(tx, `${typeArgs[5]}`, args.balance),
      generic(tx, `${typeArgs[6]}`, args.option),
      generic(tx, `${typeArgs[7]}`, args.optionNone),
    ],
  });
}
