import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `ticket_policy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param ticket - Function parameter
 */
export function ticketPolicy(tx: Transaction, ticket: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::ticket_policy`,
    arguments: [obj(tx, ticket)],
  });
}
