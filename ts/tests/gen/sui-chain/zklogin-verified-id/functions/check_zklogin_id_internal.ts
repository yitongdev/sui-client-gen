import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CheckZkloginIdInternalArgs {
  address: string | TransactionArgument;
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
  vecU83: Array<number | TransactionArgument> | TransactionArgument;
  vecU84: Array<number | TransactionArgument> | TransactionArgument;
  u256: bigint | TransactionArgument;
}

/**
 * Move function: `check_zklogin_id_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_id`
 *
 * @param tx - The transaction object
 * @param address - Function parameter
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @param vecU83 - Function parameter
 * @param vecU84 - Function parameter
 * @param u256 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function checkZkloginIdInternal(
  tx: Transaction,
  args: CheckZkloginIdInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_id::check_zklogin_id_internal`,
    arguments: [
      pure(tx, args.address, `address`),
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
      pure(tx, args.vecU83, `vector<u8>`),
      pure(tx, args.vecU84, `vector<u8>`),
      pure(tx, args.u256, `u256`),
    ],
  });
}
