import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../index.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `id_to_address`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param id - Function parameter
 */
export function idToAddress(tx: Transaction, id: string | TransactionArgument) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::id_to_address`,
    arguments: [pure(tx, id, `${ID.$typeName}`)],
  });
}
