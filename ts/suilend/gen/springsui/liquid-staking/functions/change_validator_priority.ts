import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ChangeValidatorPriorityArgs {
  liquidStakingInfo: TransactionObjectInput;
  adminCap: TransactionObjectInput;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `change_validator_priority`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param liquidStakingInfo - Function parameter
 * @param adminCap - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 */
export function changeValidatorPriority(
  tx: Transaction,
  typeArg: string,
  args: ChangeValidatorPriorityArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquid_staking::change_validator_priority`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.liquidStakingInfo),
      obj(tx, args.adminCap),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
    ],
  });
}
