import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface RedeemArgs {
  liquidStakingInfo: TransactionObjectInput;
  coin: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
}

/**
 * Move function: `redeem`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param liquidStakingInfo - Function parameter
 * @param coin - Function parameter
 * @param suiSystemState - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function redeem(tx: Transaction, typeArg: string, args: RedeemArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquid_staking::redeem`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.liquidStakingInfo), obj(tx, args.coin), obj(tx, args.suiSystemState)],
  });
}
