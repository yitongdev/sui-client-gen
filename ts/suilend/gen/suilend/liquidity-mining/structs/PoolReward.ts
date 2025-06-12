import { TypeName } from "../../../_dependencies/onchain/0x1/type-name/structs/index.js";
import { Bag } from "../../../_dependencies/onchain/0x2/bag/structs/index.js";
import { ID, UID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../_framework/reified.js";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { Decimal } from "../../decimal/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPoolReward(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquidity_mining::PoolReward`;
}

export interface PoolRewardFields {
  id: ToField<UID>;
  poolRewardManagerId: ToField<ID>;
  coinType: ToField<TypeName>;
  startTimeMs: ToField<"u64">;
  endTimeMs: ToField<"u64">;
  totalRewards: ToField<"u64">;
  allocatedRewards: ToField<Decimal>;
  cumulativeRewardsPerShare: ToField<Decimal>;
  numUserRewardManagers: ToField<"u64">;
  additionalFields: ToField<Bag>;
}

export type PoolRewardReified = Reified<PoolReward, PoolRewardFields>;

/**
 * Move struct: `PoolReward`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 */
export class PoolReward implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquidity_mining::PoolReward`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PoolReward.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquidity_mining::PoolReward`;
  readonly $typeArgs: [];
  readonly $isPhantom = PoolReward.$isPhantom;

  readonly id: ToField<UID>;
  readonly poolRewardManagerId: ToField<ID>;
  readonly coinType: ToField<TypeName>;
  readonly startTimeMs: ToField<"u64">;
  readonly endTimeMs: ToField<"u64">;
  readonly totalRewards: ToField<"u64">;
  readonly allocatedRewards: ToField<Decimal>;
  readonly cumulativeRewardsPerShare: ToField<Decimal>;
  readonly numUserRewardManagers: ToField<"u64">;
  readonly additionalFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: PoolRewardFields) {
    this.$fullTypeName = composeSuiType(
      PoolReward.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquidity_mining::PoolReward`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.poolRewardManagerId = fields.poolRewardManagerId;
    this.coinType = fields.coinType;
    this.startTimeMs = fields.startTimeMs;
    this.endTimeMs = fields.endTimeMs;
    this.totalRewards = fields.totalRewards;
    this.allocatedRewards = fields.allocatedRewards;
    this.cumulativeRewardsPerShare = fields.cumulativeRewardsPerShare;
    this.numUserRewardManagers = fields.numUserRewardManagers;
    this.additionalFields = fields.additionalFields;
  }

  static reified(): PoolRewardReified {
    return {
      typeName: PoolReward.$typeName,
      fullTypeName: composeSuiType(
        PoolReward.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquidity_mining::PoolReward`,
      typeArgs: [] as [],
      isPhantom: PoolReward.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PoolReward.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PoolReward.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolReward.fromBcs(data),
      bcs: PoolReward.bcs,
      fromJSONField: (field: any) => PoolReward.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PoolReward.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PoolReward.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => PoolReward.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => PoolReward.fetch(client, id),
      new: (fields: PoolRewardFields) => {
        return new PoolReward([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PoolReward.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PoolReward>> {
    return phantom(PoolReward.reified());
  }
  static get p() {
    return PoolReward.phantom();
  }

  static get bcs() {
    return bcs.struct("PoolReward", {
      id: UID.bcs,
      pool_reward_manager_id: ID.bcs,
      coin_type: TypeName.bcs,
      start_time_ms: bcs.u64(),
      end_time_ms: bcs.u64(),
      total_rewards: bcs.u64(),
      allocated_rewards: Decimal.bcs,
      cumulative_rewards_per_share: Decimal.bcs,
      num_user_reward_managers: bcs.u64(),
      additional_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): PoolReward {
    return PoolReward.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      poolRewardManagerId: decodeFromFields(ID.reified(), fields.pool_reward_manager_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      startTimeMs: decodeFromFields("u64", fields.start_time_ms),
      endTimeMs: decodeFromFields("u64", fields.end_time_ms),
      totalRewards: decodeFromFields("u64", fields.total_rewards),
      allocatedRewards: decodeFromFields(Decimal.reified(), fields.allocated_rewards),
      cumulativeRewardsPerShare: decodeFromFields(
        Decimal.reified(),
        fields.cumulative_rewards_per_share,
      ),
      numUserRewardManagers: decodeFromFields("u64", fields.num_user_reward_managers),
      additionalFields: decodeFromFields(Bag.reified(), fields.additional_fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolReward {
    if (!isPoolReward(item.type)) {
      throw new Error("not a PoolReward type");
    }

    return PoolReward.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      poolRewardManagerId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.pool_reward_manager_id,
      ),
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      startTimeMs: decodeFromFieldsWithTypes("u64", item.fields.start_time_ms),
      endTimeMs: decodeFromFieldsWithTypes("u64", item.fields.end_time_ms),
      totalRewards: decodeFromFieldsWithTypes("u64", item.fields.total_rewards),
      allocatedRewards: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.allocated_rewards),
      cumulativeRewardsPerShare: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.cumulative_rewards_per_share,
      ),
      numUserRewardManagers: decodeFromFieldsWithTypes("u64", item.fields.num_user_reward_managers),
      additionalFields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.additional_fields),
    });
  }

  static fromBcs(data: Uint8Array): PoolReward {
    return PoolReward.fromFields(PoolReward.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      poolRewardManagerId: this.poolRewardManagerId,
      coinType: this.coinType.toJSONField(),
      startTimeMs: this.startTimeMs.toString(),
      endTimeMs: this.endTimeMs.toString(),
      totalRewards: this.totalRewards.toString(),
      allocatedRewards: this.allocatedRewards.toJSONField(),
      cumulativeRewardsPerShare: this.cumulativeRewardsPerShare.toJSONField(),
      numUserRewardManagers: this.numUserRewardManagers.toString(),
      additionalFields: this.additionalFields.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): PoolReward {
    return PoolReward.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      poolRewardManagerId: decodeFromJSONField(ID.reified(), field.poolRewardManagerId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      startTimeMs: decodeFromJSONField("u64", field.startTimeMs),
      endTimeMs: decodeFromJSONField("u64", field.endTimeMs),
      totalRewards: decodeFromJSONField("u64", field.totalRewards),
      allocatedRewards: decodeFromJSONField(Decimal.reified(), field.allocatedRewards),
      cumulativeRewardsPerShare: decodeFromJSONField(
        Decimal.reified(),
        field.cumulativeRewardsPerShare,
      ),
      numUserRewardManagers: decodeFromJSONField("u64", field.numUserRewardManagers),
      additionalFields: decodeFromJSONField(Bag.reified(), field.additionalFields),
    });
  }

  static fromJSON(json: Record<string, any>): PoolReward {
    if (json.$typeName !== PoolReward.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PoolReward.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PoolReward {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPoolReward(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PoolReward object`);
    }
    return PoolReward.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PoolReward {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPoolReward(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a PoolReward object`);
      }

      return PoolReward.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PoolReward.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PoolReward> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching PoolReward object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isPoolReward(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PoolReward object`);
    }

    return PoolReward.fromSuiObjectData(res.data);
  }
}
