import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GetLatestExchangeRateArgs {
  storage: TransactionObjectInput;
  id: string | TransactionArgument;
  suiSystemState: TransactionObjectInput;
}

/**
 * Move function: `get_latest_exchange_rate`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param storage - Function parameter
 * @param id - Function parameter
 * @param suiSystemState - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getLatestExchangeRate(
  tx: Transaction,
  args: GetLatestExchangeRateArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::get_latest_exchange_rate`,
    arguments: [
      obj(tx, args.storage),
      pure(tx, args.id, `${ID.$typeName}`),
      obj(tx, args.suiSystemState),
    ],
  });
}
