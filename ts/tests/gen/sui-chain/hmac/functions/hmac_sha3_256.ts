import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface HmacSha3256Args {
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `hmac_sha3_256`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::hmac`
 *
 * @param tx - The transaction object
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function hmacSha3256(
  tx: Transaction,
  args: HmacSha3256Args,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hmac::hmac_sha3_256`,
    arguments: [
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
    ],
  });
}
