import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MigrateRegulatedCurrencyToV2Args {
  denyList: TransactionObjectInput;
  denyCap: TransactionObjectInput;
  bool: boolean | TransactionArgument;
}

/**
 * Move function: `migrate_regulated_currency_to_v2`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param denyList - Function parameter
 * @param denyCap - Function parameter
 * @param bool - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function migrateRegulatedCurrencyToV2(
  tx: Transaction,
  typeArg: string,
  args: MigrateRegulatedCurrencyToV2Args,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::migrate_regulated_currency_to_v2`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.denyList), obj(tx, args.denyCap), pure(tx, args.bool, `bool`)],
  });
}
