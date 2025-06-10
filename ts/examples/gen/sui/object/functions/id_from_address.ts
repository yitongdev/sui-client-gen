import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `id_from_address`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param bytes - Function parameter
 */
export function idFromAddress(
  tx: Transaction,
  bytes: string | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::id_from_address`,
    arguments: [pure(tx, bytes, `address`)],
  });
}
