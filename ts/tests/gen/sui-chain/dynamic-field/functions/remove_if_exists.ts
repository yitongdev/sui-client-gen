import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface RemoveIfExistsArgs {
  uid: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `remove_if_exists`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param uid - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function removeIfExists(
  tx: Transaction,
  typeArgs: [string, string],
  args: RemoveIfExistsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::remove_if_exists`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.uid), generic(tx, `${typeArgs[0]}`, args.t0)],
  });
}
