import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `from_package`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function fromPackage(
  tx: Transaction,
  typeArg: string,
  self: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::from_package`,
    typeArguments: [typeArg],
    arguments: [obj(tx, self)],
  });
}
