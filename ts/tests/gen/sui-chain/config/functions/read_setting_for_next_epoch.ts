import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ReadSettingForNextEpochArgs {
  config: TransactionObjectInput;
  t1: GenericArg;
}

/**
 * Move function: `read_setting_for_next_epoch`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::config`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @param tx - The transaction object
 * @param config - Function parameter
 * @param t1 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function readSettingForNextEpoch(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: ReadSettingForNextEpochArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::config::read_setting_for_next_epoch`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.config), generic(tx, `${typeArgs[1]}`, args.t1)],
  });
}
