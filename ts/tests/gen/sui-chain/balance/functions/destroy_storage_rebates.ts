import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `destroy_storage_rebates`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param balance - Function parameter
 * @param txContext - Function parameter
 */
export function destroyStorageRebates(
  tx: Transaction,
  typeArg: string,
  balance: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::destroy_storage_rebates`,
    typeArguments: [typeArg],
    arguments: [obj(tx, balance)],
  });
}
