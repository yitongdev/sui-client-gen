import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `single_owner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::party`
 *
 * @param tx - The transaction object
 * @param address - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function singleOwner(
  tx: Transaction,
  address: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::party::single_owner`,
    arguments: [pure(tx, address, `address`)],
  });
}
