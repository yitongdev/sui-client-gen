import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ConsensusCommitPrologueArgs {
  clock: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `consensus_commit_prologue`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::clock`
 *
 * @param tx - The transaction object
 * @param clock - Function parameter
 * @param u64 - Function parameter
 * @param txContext - Function parameter
 */
export function consensusCommitPrologue(
  tx: Transaction,
  args: ConsensusCommitPrologueArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::clock::consensus_commit_prologue`,
    arguments: [obj(tx, args.clock), pure(tx, args.u64, `u64`)],
  });
}
