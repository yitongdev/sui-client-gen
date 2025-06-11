import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `create_staker`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::staker`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param treasuryCap - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createStaker(
  tx: Transaction,
  typeArg: string,
  treasuryCap: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::staker::create_staker`,
    typeArguments: [typeArg],
    arguments: [obj(tx, treasuryCap)],
  });
}
