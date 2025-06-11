import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `g2_from_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param vecU8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function g2FromBytes(
  tx: Transaction,
  vecU8: Array<number | TransactionArgument> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::g2_from_bytes`,
    arguments: [pure(tx, vecU8, `vector<u8>`)],
  });
}
