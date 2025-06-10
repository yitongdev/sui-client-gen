import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `update_version`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param display - Function parameter
 */
export function updateVersion(
  tx: Transaction,
  typeArg: string,
  display: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::update_version`,
    typeArguments: [typeArg],
    arguments: [obj(tx, display)],
  });
}
