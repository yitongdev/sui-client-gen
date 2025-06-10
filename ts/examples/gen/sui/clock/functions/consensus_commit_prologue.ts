import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface ConsensusCommitPrologueArgs {
  clock: TransactionObjectInput;
  timestampMs: bigint | TransactionArgument;
}

/**
 * Move function: `consensus_commit_prologue`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::clock`
 *
 * @param tx - The transaction object
 * @param clock - Function parameter
 * @param timestampMs - Function parameter
 * @param ctx - Function parameter
 */
export function consensusCommitPrologue(
  tx: Transaction,
  args: ConsensusCommitPrologueArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::clock::consensus_commit_prologue`,
    arguments: [obj(tx, args.clock), pure(tx, args.timestampMs, `u64`)],
  });
}
