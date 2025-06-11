import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdateDescriptionArgs {
  treasury: TransactionObjectInput;
  metadata: TransactionObjectInput;
  description: string | TransactionArgument;
}

/**
 * Move function: `update_description`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param treasury - Function parameter
 * @param metadata - Function parameter
 * @param description - Function parameter
 */
export function updateDescription(
  tx: Transaction,
  typeArg: string,
  args: UpdateDescriptionArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::update_description`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.treasury),
      obj(tx, args.metadata),
      pure(tx, args.description, `${String.$typeName}`),
    ],
  });
}
