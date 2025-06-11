import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface IsAllowedArgs {
  self: TransactionObjectInput;
  action: string | TransactionArgument;
}

/**
 * Move function: `is_allowed`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param action - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function isAllowed(
  tx: Transaction,
  typeArg: string,
  args: IsAllowedArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::is_allowed`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      pure(tx, args.action, `${String.$typeName}`),
    ],
  });
}
