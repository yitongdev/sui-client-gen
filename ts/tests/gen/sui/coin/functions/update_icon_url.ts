import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib/ascii/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdateIconUrlArgs {
  treasury: TransactionObjectInput;
  metadata: TransactionObjectInput;
  url: string | TransactionArgument;
}

/**
 * Move function: `update_icon_url`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param treasury - Function parameter
 * @param metadata - Function parameter
 * @param url - Function parameter
 */
export function updateIconUrl(
  tx: Transaction,
  typeArg: string,
  args: UpdateIconUrlArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::update_icon_url`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.treasury),
      obj(tx, args.metadata),
      pure(tx, args.url, `${String.$typeName}`),
    ],
  });
}
