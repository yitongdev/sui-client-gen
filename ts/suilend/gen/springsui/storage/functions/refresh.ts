import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RefreshArgs {
  storage: TransactionObjectInput;
  suiSystemState: TransactionObjectInput;
}

/**
 * Move function: `refresh`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param storage - Function parameter
 * @param suiSystemState - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function refresh(tx: Transaction, args: RefreshArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::refresh`,
    arguments: [obj(tx, args.storage), obj(tx, args.suiSystemState)],
  });
}
