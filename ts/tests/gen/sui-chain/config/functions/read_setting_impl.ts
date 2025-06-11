import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ReadSettingImplArgs {
  address1: string | TransactionArgument;
  address2: string | TransactionArgument;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `read_setting_impl`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::config`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @typeParam T3 - Type parameter 3
 * @param tx - The transaction object
 * @param address1 - Function parameter
 * @param address2 - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function readSettingImpl(
  tx: Transaction,
  typeArgs: [string, string, string, string],
  args: ReadSettingImplArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::config::read_setting_impl`,
    typeArguments: typeArgs,
    arguments: [
      pure(tx, args.address1, `address`),
      pure(tx, args.address2, `address`),
      pure(tx, args.u64, `u64`),
    ],
  });
}
