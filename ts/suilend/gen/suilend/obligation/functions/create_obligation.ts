import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `create_obligation`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param id - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createObligation(
  tx: Transaction,
  typeArg: string,
  id: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::create_obligation`,
    typeArguments: [typeArg],
    arguments: [pure(tx, id, `${ID.$typeName}`)],
  });
}
