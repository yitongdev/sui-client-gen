import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface StorageMutArgs {
  ext: GenericArg;
  self: TransactionObjectInput;
}

/**
 * Move function: `storage_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam Ext - Type parameter 0
 * @param tx - The transaction object
 * @param ext - Function parameter
 * @param self - Function parameter
 */
export function storageMut(
  tx: Transaction,
  typeArg: string,
  args: StorageMutArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::storage_mut`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, args.ext), obj(tx, args.self)],
  });
}
