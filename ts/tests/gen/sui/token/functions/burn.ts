import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface BurnArgs {
  cap: TransactionObjectInput;
  token: TransactionObjectInput;
}

/**
 * Move function: `burn`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param cap - Function parameter
 * @param token - Function parameter
 */
export function burn(
  tx: Transaction,
  typeArg: string,
  args: BurnArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::burn`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.cap), obj(tx, args.token)],
  });
}
