import { pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface VerifyZkloginIssuerArgs {
  u256: bigint | TransactionArgument;
  string: string | TransactionArgument;
}

/**
 * Move function: `verify_zklogin_issuer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_issuer`
 *
 * @param tx - The transaction object
 * @param u256 - Function parameter
 * @param string - Function parameter
 * @param txContext - Function parameter
 */
export function verifyZkloginIssuer(
  tx: Transaction,
  args: VerifyZkloginIssuerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_issuer::verify_zklogin_issuer`,
    arguments: [pure(tx, args.u256, `u256`), pure(tx, args.string, `${String.$typeName}`)],
  });
}
