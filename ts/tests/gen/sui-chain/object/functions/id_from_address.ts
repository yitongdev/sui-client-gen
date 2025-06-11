import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `id_from_address`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param address - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function idFromAddress(
  tx: Transaction,
  address: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::id_from_address`,
    arguments: [pure(tx, address, `address`)],
  });
}
