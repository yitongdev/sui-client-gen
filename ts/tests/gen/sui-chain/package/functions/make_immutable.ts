import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `make_immutable`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param upgradeCap - Function parameter
 */
export function makeImmutable(
  tx: Transaction,
  upgradeCap: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::make_immutable`,
    arguments: [obj(tx, upgradeCap)],
  });
}
