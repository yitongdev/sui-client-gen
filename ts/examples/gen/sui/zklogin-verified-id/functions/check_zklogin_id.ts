import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface CheckZkloginIdArgs {
  address: string | TransactionArgument;
  keyClaimName: string | TransactionArgument;
  keyClaimValue: string | TransactionArgument;
  issuer: string | TransactionArgument;
  audience: string | TransactionArgument;
  pinHash: bigint | TransactionArgument;
}

/**
 * Move function: `check_zklogin_id`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_id`
 *
 * @param tx - The transaction object
 * @param address - Function parameter
 * @param keyClaimName - Function parameter
 * @param keyClaimValue - Function parameter
 * @param issuer - Function parameter
 * @param audience - Function parameter
 * @param pinHash - Function parameter
 */
export function checkZkloginId(tx: Transaction, args: CheckZkloginIdArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_id::check_zklogin_id`,
    arguments: [
      pure(tx, args.address, `address`),
      pure(tx, args.keyClaimName, `${String.$typeName}`),
      pure(tx, args.keyClaimValue, `${String.$typeName}`),
      pure(tx, args.issuer, `${String.$typeName}`),
      pure(tx, args.audience, `${String.$typeName}`),
      pure(tx, args.pinHash, `u256`),
    ],
  });
}
