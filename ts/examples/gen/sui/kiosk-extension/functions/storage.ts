import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface StorageArgs {
  ext: GenericArg;
  self: TransactionObjectInput;
}

/**
 * Move function: `storage`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam Ext - Type parameter 0
 * @param tx - The transaction object
 * @param ext - Function parameter
 * @param self - Function parameter
 */
export function storage(tx: Transaction, typeArg: string, args: StorageArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::storage`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, args.ext), obj(tx, args.self)],
  });
}
