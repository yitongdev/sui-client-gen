import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ReadSettingArgs {
  id: string | TransactionArgument;
  t0: GenericArg;
}

/**
 * Move function: `read_setting`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::config`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param id - Function parameter
 * @param t0 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function readSetting(
  tx: Transaction,
  typeArgs: [string, string],
  args: ReadSettingArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::config::read_setting`,
    typeArguments: typeArgs,
    arguments: [
      pure(tx, args.id, `${ID.$typeName}`),
      generic(tx, `${typeArgs[0]}`, args.t0),
    ],
  });
}
