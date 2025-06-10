import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `hex_char_value`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::address`
 *
 * @param tx - The transaction object
 * @param c - Function parameter
 */
export function hexCharValue(tx: Transaction, c: number | TransactionArgument) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::hex_char_value`,
    arguments: [pure(tx, c, `u8`)],
  });
}
