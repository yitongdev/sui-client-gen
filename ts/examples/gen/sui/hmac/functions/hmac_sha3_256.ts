import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface HmacSha3256Args {
  key: Array<number | TransactionArgument> | TransactionArgument;
  msg: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `hmac_sha3_256`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::hmac`
 *
 * @param tx - The transaction object
 * @param key - Function parameter
 * @param msg - Function parameter
 */
export function hmacSha3256(tx: Transaction, args: HmacSha3256Args) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hmac::hmac_sha3_256`,
    arguments: [
      pure(tx, args.key, `vector<u8>`),
      pure(tx, args.msg, `vector<u8>`),
    ],
  });
}
