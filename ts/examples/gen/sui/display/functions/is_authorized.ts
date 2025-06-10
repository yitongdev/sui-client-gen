import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `is_authorized`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param pub - Function parameter
 */
export function isAuthorized(
  tx: Transaction,
  typeArg: string,
  pub: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::is_authorized`,
    typeArguments: [typeArg],
    arguments: [obj(tx, pub)],
  });
}
