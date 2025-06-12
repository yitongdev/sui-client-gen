import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `claim_and_keep`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @typeParam OTW - Type parameter 0
 * @param tx - The transaction object
 * @param otw - Function parameter
 * @param ctx - Function parameter
 */
export function claimAndKeep(tx: Transaction, typeArg: string, otw: GenericArg): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::claim_and_keep`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, otw)],
  });
}
