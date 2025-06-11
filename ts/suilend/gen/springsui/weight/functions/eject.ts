import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface EjectArgs {
  weightHook: TransactionObjectInput;
  weightHookAdminCap: TransactionObjectInput;
}

/**
 * Move function: `eject`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param weightHook - Function parameter
 * @param weightHookAdminCap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function eject(
  tx: Transaction,
  typeArg: string,
  args: EjectArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::weight::eject`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.weightHook), obj(tx, args.weightHookAdminCap)],
  });
}
