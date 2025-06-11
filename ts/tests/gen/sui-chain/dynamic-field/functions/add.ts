import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddArgs {
  uid: TransactionObjectInput;
  t0: GenericArg;
  t1: GenericArg;
}

/**
 * Move function: `add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param uid - Function parameter
 * @param t0 - Function parameter
 * @param t1 - Function parameter
 */
export function add(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::add`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.uid),
      generic(tx, `${typeArgs[0]}`, args.t0),
      generic(tx, `${typeArgs[1]}`, args.t1),
    ],
  });
}
