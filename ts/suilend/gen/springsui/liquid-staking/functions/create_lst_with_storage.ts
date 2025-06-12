import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface CreateLstWithStorageArgs {
  feeConfig: TransactionObjectInput;
  treasuryCap: TransactionObjectInput;
  storage: TransactionObjectInput;
}

/**
 * Move function: `create_lst_with_storage`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param feeConfig - Function parameter
 * @param treasuryCap - Function parameter
 * @param storage - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createLstWithStorage(
  tx: Transaction,
  typeArg: string,
  args: CreateLstWithStorageArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquid_staking::create_lst_with_storage`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.feeConfig), obj(tx, args.treasuryCap), obj(tx, args.storage)],
  });
}
