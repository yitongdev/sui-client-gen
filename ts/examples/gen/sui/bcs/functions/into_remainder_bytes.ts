import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `into_remainder_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bcs`
 *
 * @param tx - The transaction object
 * @param bcs - Function parameter
 */
export function intoRemainderBytes(
  tx: Transaction,
  bcs: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bcs::into_remainder_bytes`,
    arguments: [obj(tx, bcs)],
  });
}
