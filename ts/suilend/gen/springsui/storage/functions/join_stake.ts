import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface JoinStakeArgs {
  storage: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
  stakedSui: TransactionObjectInput;
}

/**
 * Move function: `join_stake`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param storage - Function parameter
 * @param suiSystemState - Function parameter
 * @param stakedSui - Function parameter
 * @param txContext - Function parameter
 */
export function joinStake(tx: Transaction, args: JoinStakeArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::join_stake`,
    arguments: [obj(tx, args.storage), obj(tx, args.suiSystemState), obj(tx, args.stakedSui)],
  });
}
