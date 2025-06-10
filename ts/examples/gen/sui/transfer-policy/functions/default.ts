import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `default`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param pub - Function parameter
 * @param ctx - Function parameter
 */
export function default_(
  tx: Transaction,
  typeArg: string,
  pub: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::default`,
    typeArguments: [typeArg],
    arguments: [obj(tx, pub)],
  });
}
