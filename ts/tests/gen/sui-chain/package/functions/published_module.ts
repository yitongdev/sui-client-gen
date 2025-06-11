import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `published_module`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param publisher - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function publishedModule(
  tx: Transaction,
  publisher: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::published_module`,
    arguments: [obj(tx, publisher)],
  });
}
