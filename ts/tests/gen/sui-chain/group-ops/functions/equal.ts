import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface EqualArgs {
  element1: TransactionObjectInput;
  element2: TransactionObjectInput;
}

/**
 * Move function: `equal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param element1 - Function parameter
 * @param element2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function equal(tx: Transaction, typeArg: string, args: EqualArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::equal`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.element1), obj(tx, args.element2)],
  });
}
