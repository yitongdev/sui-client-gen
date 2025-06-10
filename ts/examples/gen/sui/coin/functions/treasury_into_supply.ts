import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `treasury_into_supply`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param treasury - Function parameter
 */
export function treasuryIntoSupply(
  tx: Transaction,
  typeArg: string,
  treasury: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::treasury_into_supply`,
    typeArguments: [typeArg],
    arguments: [obj(tx, treasury)],
  });
}
