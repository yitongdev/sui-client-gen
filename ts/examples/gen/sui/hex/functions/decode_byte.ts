import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `decode_byte`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::hex`
 *
 * @param tx - The transaction object
 * @param hex - Function parameter
 */
export function decodeByte(tx: Transaction, hex: number | TransactionArgument) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hex::decode_byte`,
    arguments: [pure(tx, hex, `u8`)],
  });
}
