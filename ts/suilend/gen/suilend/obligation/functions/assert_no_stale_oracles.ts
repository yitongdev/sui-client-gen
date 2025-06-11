import { option as option_ } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ExistStaleOracles } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `assert_no_stale_oracles`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @param tx - The transaction object
 * @param option - Function parameter
 */
export function assertNoStaleOracles(
  tx: Transaction,
  option: TransactionObjectInput | TransactionArgument | null,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::assert_no_stale_oracles`,
    arguments: [option_(tx, `${ExistStaleOracles.$typeName}`, option)],
  });
}
