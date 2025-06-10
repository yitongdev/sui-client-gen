import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface Ed25519VerifyArgs {
  signature: Array<number | TransactionArgument> | TransactionArgument;
  publicKey: Array<number | TransactionArgument> | TransactionArgument;
  msg: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `ed25519_verify`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::ed25519`
 *
 * @param tx - The transaction object
 * @param signature - Function parameter
 * @param publicKey - Function parameter
 * @param msg - Function parameter
 */
export function ed25519Verify(tx: Transaction, args: Ed25519VerifyArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ed25519::ed25519_verify`,
    arguments: [
      pure(tx, args.signature, `vector<u8>`),
      pure(tx, args.publicKey, `vector<u8>`),
      pure(tx, args.msg, `vector<u8>`),
    ],
  });
}
