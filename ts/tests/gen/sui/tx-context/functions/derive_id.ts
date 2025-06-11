import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DeriveIdArgs {
  txHash: Array<number | TransactionArgument> | TransactionArgument;
  idsCreated: bigint | TransactionArgument;
}

/**
 * Move function: `derive_id`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::tx_context`
 *
 * @param tx - The transaction object
 * @param txHash - Function parameter
 * @param idsCreated - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function deriveId(
  tx: Transaction,
  args: DeriveIdArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::tx_context::derive_id`,
    arguments: [
      pure(tx, args.txHash, `vector<u8>`),
      pure(tx, args.idsCreated, `u64`),
    ],
  });
}
