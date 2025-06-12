import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `ticket_policy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param ticket - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function ticketPolicy(tx: Transaction, ticket: TransactionObjectInput): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::ticket_policy`,
    arguments: [obj(tx, ticket)],
  });
}
