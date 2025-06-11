import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface LstAmountToSuiAmountArgs {
  liquidStakingInfo: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `lst_amount_to_sui_amount`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param liquidStakingInfo - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function lstAmountToSuiAmount(
  tx: Transaction,
  typeArg: string,
  args: LstAmountToSuiAmountArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquid_staking::lst_amount_to_sui_amount`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.liquidStakingInfo), pure(tx, args.u64, `u64`)],
  });
}
