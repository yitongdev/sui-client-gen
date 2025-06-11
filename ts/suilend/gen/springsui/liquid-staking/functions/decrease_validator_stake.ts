import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DecreaseValidatorStakeArgs {
  liquidStakingInfo: TransactionObjectInput;
  adminCap: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
  address: string | TransactionArgument;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `decrease_validator_stake`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param liquidStakingInfo - Function parameter
 * @param adminCap - Function parameter
 * @param suiSystemState - Function parameter
 * @param address - Function parameter
 * @param u64 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function decreaseValidatorStake(
  tx: Transaction,
  typeArg: string,
  args: DecreaseValidatorStakeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquid_staking::decrease_validator_stake`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.liquidStakingInfo),
      obj(tx, args.adminCap),
      obj(tx, args.suiSystemState),
      pure(tx, args.address, `address`),
      pure(tx, args.u64, `u64`),
    ],
  });
}
