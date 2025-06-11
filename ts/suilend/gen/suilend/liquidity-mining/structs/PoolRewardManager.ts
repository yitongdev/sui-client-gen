import * as reified from "../../../_framework/reified.js";
import { Option } from "../../../_dependencies/onchain/0x1/option/structs/index.js";
import { UID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { PKG_V1 } from "../../constants.js";
import { PoolReward as PoolReward1 } from "./PoolReward.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPoolRewardManager(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquidity_mining::PoolRewardManager`;
}

export interface PoolRewardManagerFields {
  id: ToField<UID>;
  totalShares: ToField<"u64">;
  poolRewards: ToField<Vector<Option<PoolReward1>>>;
  lastUpdateTimeMs: ToField<"u64">;
}

export type PoolRewardManagerReified = Reified<
  PoolRewardManager,
  PoolRewardManagerFields
>;

/**
 * Move struct: `PoolRewardManager`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 */
export class PoolRewardManager implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquidity_mining::PoolRewardManager`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PoolRewardManager.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquidity_mining::PoolRewardManager`;
  readonly $typeArgs: [];
  readonly $isPhantom = PoolRewardManager.$isPhantom;

  readonly id: ToField<UID>;
  readonly totalShares: ToField<"u64">;
  readonly poolRewards: ToField<Vector<Option<PoolReward1>>>;
  readonly lastUpdateTimeMs: ToField<"u64">;

  private constructor(typeArgs: [], fields: PoolRewardManagerFields) {
    this.$fullTypeName = composeSuiType(
      PoolRewardManager.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquidity_mining::PoolRewardManager`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.totalShares = fields.totalShares;
    this.poolRewards = fields.poolRewards;
    this.lastUpdateTimeMs = fields.lastUpdateTimeMs;
  }

  static reified(): PoolRewardManagerReified {
    return {
      typeName: PoolRewardManager.$typeName,
      fullTypeName: composeSuiType(
        PoolRewardManager.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquidity_mining::PoolRewardManager`,
      typeArgs: [] as [],
      isPhantom: PoolRewardManager.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        PoolRewardManager.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PoolRewardManager.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolRewardManager.fromBcs(data),
      bcs: PoolRewardManager.bcs,
      fromJSONField: (field: any) => PoolRewardManager.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PoolRewardManager.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PoolRewardManager.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PoolRewardManager.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        PoolRewardManager.fetch(client, id),
      new: (fields: PoolRewardManagerFields) => {
        return new PoolRewardManager([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PoolRewardManager.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PoolRewardManager>> {
    return phantom(PoolRewardManager.reified());
  }
  static get p() {
    return PoolRewardManager.phantom();
  }

  static get bcs() {
    return bcs.struct("PoolRewardManager", {
      id: UID.bcs,
      total_shares: bcs.u64(),
      pool_rewards: bcs.vector(Option.bcs(PoolReward1.bcs)),
      last_update_time_ms: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): PoolRewardManager {
    return PoolRewardManager.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      totalShares: decodeFromFields("u64", fields.total_shares),
      poolRewards: decodeFromFields(
        reified.vector(Option.reified(PoolReward1.reified())),
        fields.pool_rewards,
      ),
      lastUpdateTimeMs: decodeFromFields("u64", fields.last_update_time_ms),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolRewardManager {
    if (!isPoolRewardManager(item.type)) {
      throw new Error("not a PoolRewardManager type");
    }

    return PoolRewardManager.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      totalShares: decodeFromFieldsWithTypes("u64", item.fields.total_shares),
      poolRewards: decodeFromFieldsWithTypes(
        reified.vector(Option.reified(PoolReward1.reified())),
        item.fields.pool_rewards,
      ),
      lastUpdateTimeMs: decodeFromFieldsWithTypes(
        "u64",
        item.fields.last_update_time_ms,
      ),
    });
  }

  static fromBcs(data: Uint8Array): PoolRewardManager {
    return PoolRewardManager.fromFields(PoolRewardManager.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      totalShares: this.totalShares.toString(),
      poolRewards: fieldToJSON<Vector<Option<PoolReward1>>>(
        `vector<${Option.$typeName}<${PoolReward1.$typeName}>>`,
        this.poolRewards,
      ),
      lastUpdateTimeMs: this.lastUpdateTimeMs.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): PoolRewardManager {
    return PoolRewardManager.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      totalShares: decodeFromJSONField("u64", field.totalShares),
      poolRewards: decodeFromJSONField(
        reified.vector(Option.reified(PoolReward1.reified())),
        field.poolRewards,
      ),
      lastUpdateTimeMs: decodeFromJSONField("u64", field.lastUpdateTimeMs),
    });
  }

  static fromJSON(json: Record<string, any>): PoolRewardManager {
    if (json.$typeName !== PoolRewardManager.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PoolRewardManager.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PoolRewardManager {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPoolRewardManager(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PoolRewardManager object`,
      );
    }
    return PoolRewardManager.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PoolRewardManager {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isPoolRewardManager(data.bcs.type)
      ) {
        throw new Error(`object at is not a PoolRewardManager object`);
      }

      return PoolRewardManager.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PoolRewardManager.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<PoolRewardManager> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PoolRewardManager object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPoolRewardManager(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a PoolRewardManager object`);
    }

    return PoolRewardManager.fromSuiObjectData(res.data);
  }
}
