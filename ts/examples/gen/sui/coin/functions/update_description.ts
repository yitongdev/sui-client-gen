import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
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
) {
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
