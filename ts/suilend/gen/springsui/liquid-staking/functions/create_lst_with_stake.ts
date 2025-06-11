import { FungibleStakedSui } from "../../../_dependencies/onchain/0x3/staking-pool/structs/index.js";
import { obj, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateLstWithStakeArgs {
  suiSystemState: TransactionObjectInput;
  feeConfig: TransactionObjectInput;
  treasuryCap: TransactionObjectInput;
  vecFungibleStakedSui: Array<TransactionObjectInput> | TransactionArgument;
  coin: TransactionObjectInput;
}

/**
 * Move function: `create_lst_with_stake`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param suiSystemState - Function parameter
 * @param feeConfig - Function parameter
 * @param treasuryCap - Function parameter
 * @param vecFungibleStakedSui - Function parameter
 * @param coin - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createLstWithStake(
  tx: Transaction,
  typeArg: string,
  args: CreateLstWithStakeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquid_staking::create_lst_with_stake`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.suiSystemState),
      obj(tx, args.feeConfig),
      obj(tx, args.treasuryCap),
      vector(tx, `${FungibleStakedSui.$typeName}`, args.vecFungibleStakedSui),
      obj(tx, args.coin),
    ],
  });
}
