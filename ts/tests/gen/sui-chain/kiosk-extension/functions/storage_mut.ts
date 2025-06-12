import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface StorageMutArgs {
  t0: GenericArg;
  kiosk: TransactionObjectInput;
}

/**
 * Move function: `storage_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param kiosk - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function storageMut(
  tx: Transaction,
  typeArg: string,
  args: StorageMutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::storage_mut`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, args.t0), obj(tx, args.kiosk)],
  });
}
