import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface IsAllowedArgs {
  tokenPolicy: TransactionObjectInput;
  string: string | TransactionArgument;
}

/**
 * Move function: `is_allowed`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tokenPolicy - Function parameter
 * @param string - Function parameter
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
      obj(tx, args.tokenPolicy),
      pure(tx, args.string, `${String.$typeName}`),
    ],
  });
}
