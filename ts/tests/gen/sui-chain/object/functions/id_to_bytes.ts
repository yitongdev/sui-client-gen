import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `id_to_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param id - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function idToBytes(
  tx: Transaction,
  id: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::id_to_bytes`,
    arguments: [pure(tx, id, `${ID.$typeName}`)],
  });
}
