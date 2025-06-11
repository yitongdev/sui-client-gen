import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MintArgs {
  liquidStakingInfo: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
  coin: TransactionObjectInput;
}

/**
 * Move function: `mint`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param liquidStakingInfo - Function parameter
 * @param suiSystemState - Function parameter
 * @param coin - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function mint(
  tx: Transaction,
  typeArg: string,
  args: MintArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquid_staking::mint`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.liquidStakingInfo),
      obj(tx, args.suiSystemState),
      obj(tx, args.coin),
    ],
  });
}
