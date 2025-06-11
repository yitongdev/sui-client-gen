import * as reified from "../../../_framework/reified.js";
import { Option } from "../../../_dependencies/onchain/0x1/option/structs/index.js";
import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
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
import { UserReward as UserReward1 } from "./UserReward.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isUserRewardManager(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquidity_mining::UserRewardManager`;
}

export interface UserRewardManagerFields {
  poolRewardManagerId: ToField<ID>;
  share: ToField<"u64">;
  rewards: ToField<Vector<Option<UserReward1>>>;
  lastUpdateTimeMs: ToField<"u64">;
}

export type UserRewardManagerReified = Reified<
  UserRewardManager,
  UserRewardManagerFields
>;

/**
 * Move struct: `UserRewardManager`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 */
export class UserRewardManager implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquidity_mining::UserRewardManager`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = UserRewardManager.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquidity_mining::UserRewardManager`;
  readonly $typeArgs: [];
  readonly $isPhantom = UserRewardManager.$isPhantom;

  readonly poolRewardManagerId: ToField<ID>;
  readonly share: ToField<"u64">;
  readonly rewards: ToField<Vector<Option<UserReward1>>>;
  readonly lastUpdateTimeMs: ToField<"u64">;

  private constructor(typeArgs: [], fields: UserRewardManagerFields) {
    this.$fullTypeName = composeSuiType(
      UserRewardManager.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquidity_mining::UserRewardManager`;
    this.$typeArgs = typeArgs;

    this.poolRewardManagerId = fields.poolRewardManagerId;
    this.share = fields.share;
    this.rewards = fields.rewards;
    this.lastUpdateTimeMs = fields.lastUpdateTimeMs;
  }

  static reified(): UserRewardManagerReified {
    return {
      typeName: UserRewardManager.$typeName,
      fullTypeName: composeSuiType(
        UserRewardManager.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquidity_mining::UserRewardManager`,
      typeArgs: [] as [],
      isPhantom: UserRewardManager.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        UserRewardManager.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        UserRewardManager.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UserRewardManager.fromBcs(data),
      bcs: UserRewardManager.bcs,
      fromJSONField: (field: any) => UserRewardManager.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UserRewardManager.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        UserRewardManager.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        UserRewardManager.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        UserRewardManager.fetch(client, id),
      new: (fields: UserRewardManagerFields) => {
        return new UserRewardManager([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return UserRewardManager.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<UserRewardManager>> {
    return phantom(UserRewardManager.reified());
  }
  static get p() {
    return UserRewardManager.phantom();
  }

  static get bcs() {
    return bcs.struct("UserRewardManager", {
      pool_reward_manager_id: ID.bcs,
      share: bcs.u64(),
      rewards: bcs.vector(Option.bcs(UserReward1.bcs)),
      last_update_time_ms: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): UserRewardManager {
    return UserRewardManager.reified().new({
      poolRewardManagerId: decodeFromFields(
        ID.reified(),
        fields.pool_reward_manager_id,
      ),
      share: decodeFromFields("u64", fields.share),
      rewards: decodeFromFields(
        reified.vector(Option.reified(UserReward1.reified())),
        fields.rewards,
      ),
      lastUpdateTimeMs: decodeFromFields("u64", fields.last_update_time_ms),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UserRewardManager {
    if (!isUserRewardManager(item.type)) {
      throw new Error("not a UserRewardManager type");
    }

    return UserRewardManager.reified().new({
      poolRewardManagerId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.pool_reward_manager_id,
      ),
      share: decodeFromFieldsWithTypes("u64", item.fields.share),
      rewards: decodeFromFieldsWithTypes(
        reified.vector(Option.reified(UserReward1.reified())),
        item.fields.rewards,
      ),
      lastUpdateTimeMs: decodeFromFieldsWithTypes(
        "u64",
        item.fields.last_update_time_ms,
      ),
    });
  }

  static fromBcs(data: Uint8Array): UserRewardManager {
    return UserRewardManager.fromFields(UserRewardManager.bcs.parse(data));
  }

  toJSONField() {
    return {
      poolRewardManagerId: this.poolRewardManagerId,
      share: this.share.toString(),
      rewards: fieldToJSON<Vector<Option<UserReward1>>>(
        `vector<${Option.$typeName}<${UserReward1.$typeName}>>`,
        this.rewards,
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

  static fromJSONField(field: any): UserRewardManager {
    return UserRewardManager.reified().new({
      poolRewardManagerId: decodeFromJSONField(
        ID.reified(),
        field.poolRewardManagerId,
      ),
      share: decodeFromJSONField("u64", field.share),
      rewards: decodeFromJSONField(
        reified.vector(Option.reified(UserReward1.reified())),
        field.rewards,
      ),
      lastUpdateTimeMs: decodeFromJSONField("u64", field.lastUpdateTimeMs),
    });
  }

  static fromJSON(json: Record<string, any>): UserRewardManager {
    if (json.$typeName !== UserRewardManager.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return UserRewardManager.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): UserRewardManager {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUserRewardManager(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a UserRewardManager object`,
      );
    }
    return UserRewardManager.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): UserRewardManager {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isUserRewardManager(data.bcs.type)
      ) {
        throw new Error(`object at is not a UserRewardManager object`);
      }

      return UserRewardManager.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return UserRewardManager.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<UserRewardManager> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching UserRewardManager object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isUserRewardManager(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a UserRewardManager object`);
    }

    return UserRewardManager.fromSuiObjectData(res.data);
  }
}
