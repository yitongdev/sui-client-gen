import * as reified from "../../../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Option } from "../../../0x1/option/structs/index.js";
import { Bag } from "../../../0x2/bag/structs/index.js";
import { Balance } from "../../../0x2/balance/structs/index.js";
import { UID } from "../../../0x2/object/structs/index.js";
import { SUI } from "../../../0x2/sui/structs/index.js";
import { Table } from "../../../0x2/table/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { PoolTokenExchangeRate as PoolTokenExchangeRate1 } from "./PoolTokenExchangeRate.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isStakingPool(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::staking_pool::StakingPool`;
}

export interface StakingPoolFields {
  id: ToField<UID>;
  activationEpoch: ToField<Option<"u64">>;
  deactivationEpoch: ToField<Option<"u64">>;
  suiBalance: ToField<"u64">;
  rewardsPool: ToField<Balance<ToPhantom<SUI>>>;
  poolTokenBalance: ToField<"u64">;
  exchangeRates: ToField<Table<"u64", ToPhantom<PoolTokenExchangeRate1>>>;
  pendingStake: ToField<"u64">;
  pendingTotalSuiWithdraw: ToField<"u64">;
  pendingPoolTokenWithdraw: ToField<"u64">;
  extraFields: ToField<Bag>;
}

export type StakingPoolReified = Reified<StakingPool, StakingPoolFields>;

/**
 * Move struct: `StakingPool`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::staking_pool`
 */
export class StakingPool implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::staking_pool::StakingPool`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = StakingPool.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::staking_pool::StakingPool`;
  readonly $typeArgs: [];
  readonly $isPhantom = StakingPool.$isPhantom;

  readonly id: ToField<UID>;
  readonly activationEpoch: ToField<Option<"u64">>;
  readonly deactivationEpoch: ToField<Option<"u64">>;
  readonly suiBalance: ToField<"u64">;
  readonly rewardsPool: ToField<Balance<ToPhantom<SUI>>>;
  readonly poolTokenBalance: ToField<"u64">;
  readonly exchangeRates: ToField<
    Table<"u64", ToPhantom<PoolTokenExchangeRate1>>
  >;
  readonly pendingStake: ToField<"u64">;
  readonly pendingTotalSuiWithdraw: ToField<"u64">;
  readonly pendingPoolTokenWithdraw: ToField<"u64">;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: StakingPoolFields) {
    this.$fullTypeName = composeSuiType(
      StakingPool.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::staking_pool::StakingPool`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.activationEpoch = fields.activationEpoch;
    this.deactivationEpoch = fields.deactivationEpoch;
    this.suiBalance = fields.suiBalance;
    this.rewardsPool = fields.rewardsPool;
    this.poolTokenBalance = fields.poolTokenBalance;
    this.exchangeRates = fields.exchangeRates;
    this.pendingStake = fields.pendingStake;
    this.pendingTotalSuiWithdraw = fields.pendingTotalSuiWithdraw;
    this.pendingPoolTokenWithdraw = fields.pendingPoolTokenWithdraw;
    this.extraFields = fields.extraFields;
  }

  static reified(): StakingPoolReified {
    return {
      typeName: StakingPool.$typeName,
      fullTypeName: composeSuiType(
        StakingPool.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::staking_pool::StakingPool`,
      typeArgs: [] as [],
      isPhantom: StakingPool.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        StakingPool.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        StakingPool.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => StakingPool.fromBcs(data),
      bcs: StakingPool.bcs,
      fromJSONField: (field: any) => StakingPool.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => StakingPool.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        StakingPool.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        StakingPool.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        StakingPool.fetch(client, id),
      new: (fields: StakingPoolFields) => {
        return new StakingPool([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return StakingPool.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<StakingPool>> {
    return phantom(StakingPool.reified());
  }
  static get p() {
    return StakingPool.phantom();
  }

  static get bcs() {
    return bcs.struct("StakingPool", {
      id: UID.bcs,
      activation_epoch: Option.bcs(bcs.u64()),
      deactivation_epoch: Option.bcs(bcs.u64()),
      sui_balance: bcs.u64(),
      rewards_pool: Balance.bcs,
      pool_token_balance: bcs.u64(),
      exchange_rates: Table.bcs,
      pending_stake: bcs.u64(),
      pending_total_sui_withdraw: bcs.u64(),
      pending_pool_token_withdraw: bcs.u64(),
      extra_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): StakingPool {
    return StakingPool.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      activationEpoch: decodeFromFields(
        Option.reified("u64"),
        fields.activation_epoch,
      ),
      deactivationEpoch: decodeFromFields(
        Option.reified("u64"),
        fields.deactivation_epoch,
      ),
      suiBalance: decodeFromFields("u64", fields.sui_balance),
      rewardsPool: decodeFromFields(
        Balance.reified(reified.phantom(SUI.reified())),
        fields.rewards_pool,
      ),
      poolTokenBalance: decodeFromFields("u64", fields.pool_token_balance),
      exchangeRates: decodeFromFields(
        Table.reified(
          reified.phantom("u64"),
          reified.phantom(PoolTokenExchangeRate1.reified()),
        ),
        fields.exchange_rates,
      ),
      pendingStake: decodeFromFields("u64", fields.pending_stake),
      pendingTotalSuiWithdraw: decodeFromFields(
        "u64",
        fields.pending_total_sui_withdraw,
      ),
      pendingPoolTokenWithdraw: decodeFromFields(
        "u64",
        fields.pending_pool_token_withdraw,
      ),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): StakingPool {
    if (!isStakingPool(item.type)) {
      throw new Error("not a StakingPool type");
    }

    return StakingPool.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      activationEpoch: decodeFromFieldsWithTypes(
        Option.reified("u64"),
        item.fields.activation_epoch,
      ),
      deactivationEpoch: decodeFromFieldsWithTypes(
        Option.reified("u64"),
        item.fields.deactivation_epoch,
      ),
      suiBalance: decodeFromFieldsWithTypes("u64", item.fields.sui_balance),
      rewardsPool: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.rewards_pool,
      ),
      poolTokenBalance: decodeFromFieldsWithTypes(
        "u64",
        item.fields.pool_token_balance,
      ),
      exchangeRates: decodeFromFieldsWithTypes(
        Table.reified(
          reified.phantom("u64"),
          reified.phantom(PoolTokenExchangeRate1.reified()),
        ),
        item.fields.exchange_rates,
      ),
      pendingStake: decodeFromFieldsWithTypes("u64", item.fields.pending_stake),
      pendingTotalSuiWithdraw: decodeFromFieldsWithTypes(
        "u64",
        item.fields.pending_total_sui_withdraw,
      ),
      pendingPoolTokenWithdraw: decodeFromFieldsWithTypes(
        "u64",
        item.fields.pending_pool_token_withdraw,
      ),
      extraFields: decodeFromFieldsWithTypes(
        Bag.reified(),
        item.fields.extra_fields,
      ),
    });
  }

  static fromBcs(data: Uint8Array): StakingPool {
    return StakingPool.fromFields(StakingPool.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      activationEpoch: fieldToJSON<Option<"u64">>(
        `${Option.$typeName}<u64>`,
        this.activationEpoch,
      ),
      deactivationEpoch: fieldToJSON<Option<"u64">>(
        `${Option.$typeName}<u64>`,
        this.deactivationEpoch,
      ),
      suiBalance: this.suiBalance.toString(),
      rewardsPool: this.rewardsPool.toJSONField(),
      poolTokenBalance: this.poolTokenBalance.toString(),
      exchangeRates: this.exchangeRates.toJSONField(),
      pendingStake: this.pendingStake.toString(),
      pendingTotalSuiWithdraw: this.pendingTotalSuiWithdraw.toString(),
      pendingPoolTokenWithdraw: this.pendingPoolTokenWithdraw.toString(),
      extraFields: this.extraFields.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): StakingPool {
    return StakingPool.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      activationEpoch: decodeFromJSONField(
        Option.reified("u64"),
        field.activationEpoch,
      ),
      deactivationEpoch: decodeFromJSONField(
        Option.reified("u64"),
        field.deactivationEpoch,
      ),
      suiBalance: decodeFromJSONField("u64", field.suiBalance),
      rewardsPool: decodeFromJSONField(
        Balance.reified(reified.phantom(SUI.reified())),
        field.rewardsPool,
      ),
      poolTokenBalance: decodeFromJSONField("u64", field.poolTokenBalance),
      exchangeRates: decodeFromJSONField(
        Table.reified(
          reified.phantom("u64"),
          reified.phantom(PoolTokenExchangeRate1.reified()),
        ),
        field.exchangeRates,
      ),
      pendingStake: decodeFromJSONField("u64", field.pendingStake),
      pendingTotalSuiWithdraw: decodeFromJSONField(
        "u64",
        field.pendingTotalSuiWithdraw,
      ),
      pendingPoolTokenWithdraw: decodeFromJSONField(
        "u64",
        field.pendingPoolTokenWithdraw,
      ),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON(json: Record<string, any>): StakingPool {
    if (json.$typeName !== StakingPool.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return StakingPool.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): StakingPool {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isStakingPool(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a StakingPool object`,
      );
    }
    return StakingPool.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): StakingPool {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isStakingPool(data.bcs.type)) {
        throw new Error(`object at is not a StakingPool object`);
      }

      return StakingPool.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return StakingPool.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<StakingPool> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching StakingPool object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isStakingPool(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a StakingPool object`);
    }

    return StakingPool.fromSuiObjectData(res.data);
  }
}
