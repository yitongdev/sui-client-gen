import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `keep`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param token - Function parameter
 * @param txContext - Function parameter
 */
export function keep(
  tx: Transaction,
  typeArg: string,
  token: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::keep`,
    typeArguments: [typeArg],
    arguments: [obj(tx, token)],
  });
}
