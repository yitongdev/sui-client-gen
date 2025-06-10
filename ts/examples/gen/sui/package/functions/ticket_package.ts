import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `ticket_package`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param ticket - Function parameter
 */
export function ticketPackage(tx: Transaction, ticket: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::ticket_package`,
    arguments: [obj(tx, ticket)],
  });
}
