import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ReturnValArgs {
  kiosk: TransactionObjectInput;
  t0: GenericArg;
  borrow: TransactionObjectInput;
}

/**
 * Move function: `return_val`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param t0 - Function parameter
 * @param borrow - Function parameter
 */
export function returnVal(
  tx: Transaction,
  typeArg: string,
  args: ReturnValArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::return_val`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.kiosk),
      generic(tx, `${typeArg}`, args.t0),
      obj(tx, args.borrow),
    ],
  });
}
