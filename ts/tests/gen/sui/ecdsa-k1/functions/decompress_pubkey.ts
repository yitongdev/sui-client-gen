import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `decompress_pubkey`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::ecdsa_k1`
 *
 * @param tx - The transaction object
 * @param pubkey - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function decompressPubkey(
  tx: Transaction,
  pubkey: Array<number | TransactionArgument> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ecdsa_k1::decompress_pubkey`,
    arguments: [pure(tx, pubkey, `vector<u8>`)],
  });
}
