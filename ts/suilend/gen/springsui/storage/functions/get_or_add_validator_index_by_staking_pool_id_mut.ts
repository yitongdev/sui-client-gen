import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GetOrAddValidatorIndexByStakingPoolIdMutArgs {
  storage: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
  id: string | TransactionArgument;
}

/**
 * Move function: `get_or_add_validator_index_by_staking_pool_id_mut`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param storage - Function parameter
 * @param suiSystemState - Function parameter
 * @param id - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getOrAddValidatorIndexByStakingPoolIdMut(
  tx: Transaction,
  args: GetOrAddValidatorIndexByStakingPoolIdMutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::get_or_add_validator_index_by_staking_pool_id_mut`,
    arguments: [
      obj(tx, args.storage),
      obj(tx, args.suiSystemState),
      pure(tx, args.id, `${ID.$typeName}`),
    ],
  });
}
