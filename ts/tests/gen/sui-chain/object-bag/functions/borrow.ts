import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface BorrowArgs {
  objectBag: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `borrow`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object_bag`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param objectBag - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrow(
  tx: Transaction,
  typeArgs: [string, string],
  args: BorrowArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object_bag::borrow`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.objectBag),
      generic(tx, `${typeArgs[0]}`, args.t0),
    ],
  });
}
