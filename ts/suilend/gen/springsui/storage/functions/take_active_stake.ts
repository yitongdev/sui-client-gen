import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface TakeActiveStakeArgs {
  storage: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `take_active_stake`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param storage - Function parameter
 * @param suiSystemState - Function parameter
 * @param u64 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function takeActiveStake(tx: Transaction, args: TakeActiveStakeArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::take_active_stake`,
    arguments: [obj(tx, args.storage), obj(tx, args.suiSystemState), pure(tx, args.u64, `u64`)],
  });
}
