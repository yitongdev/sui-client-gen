import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RulesArgs {
  tokenPolicy: TransactionObjectInput;
  string: string | TransactionArgument;
}

/**
 * Move function: `rules`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tokenPolicy - Function parameter
 * @param string - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function rules(tx: Transaction, typeArg: string, args: RulesArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::rules`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.tokenPolicy), pure(tx, args.string, `${String.$typeName}`)],
  });
}
