import { pure } from "../../_framework/util.js";
import { PUBLISHED_AT } from "../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export function blake2b256(
  tx: Transaction,
  vecU8: Array<number | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hash::blake2b256`,
    arguments: [pure(tx, vecU8, `vector<u8>`)],
  });
}

export function keccak256(
  tx: Transaction,
  vecU8: Array<number | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hash::keccak256`,
    arguments: [pure(tx, vecU8, `vector<u8>`)],
  });
}
