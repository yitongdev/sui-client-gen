import { pure } from "../../_framework/util.js";
import { PUBLISHED_AT } from "../index.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export function sha2256(
  tx: Transaction,
  data: Array<number | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hash::sha2_256`,
    arguments: [pure(tx, data, `vector<u8>`)],
  });
}

export function sha3256(
  tx: Transaction,
  data: Array<number | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::hash::sha3_256`,
    arguments: [pure(tx, data, `vector<u8>`)],
  });
}
