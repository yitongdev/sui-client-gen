import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ContainsWithTypeArgs {
  bag: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `contains_with_type`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bag`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param bag - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function containsWithType(
  tx: Transaction,
  typeArgs: [string, string],
  args: ContainsWithTypeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bag::contains_with_type`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.bag), generic(tx, `${typeArgs[0]}`, args.t0)],
  });
}
