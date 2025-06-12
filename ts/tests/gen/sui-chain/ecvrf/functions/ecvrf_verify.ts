import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface EcvrfVerifyArgs {
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
  vecU83: Array<number | TransactionArgument> | TransactionArgument;
  vecU84: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `ecvrf_verify`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::ecvrf`
 *
 * @param tx - The transaction object
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @param vecU83 - Function parameter
 * @param vecU84 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function ecvrfVerify(tx: Transaction, args: EcvrfVerifyArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::ecvrf::ecvrf_verify`,
    arguments: [
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
      pure(tx, args.vecU83, `vector<u8>`),
      pure(tx, args.vecU84, `vector<u8>`),
    ],
  });
}
