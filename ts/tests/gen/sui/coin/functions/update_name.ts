import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdateNameArgs {
  treasury: TransactionObjectInput;
  metadata: TransactionObjectInput;
  name: string | TransactionArgument;
}

/**
 * Move function: `update_name`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param treasury - Function parameter
 * @param metadata - Function parameter
 * @param name - Function parameter
 */
export function updateName(
  tx: Transaction,
  typeArg: string,
  args: UpdateNameArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::update_name`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.treasury),
      obj(tx, args.metadata),
      pure(tx, args.name, `${String.$typeName}`),
    ],
  });
}
