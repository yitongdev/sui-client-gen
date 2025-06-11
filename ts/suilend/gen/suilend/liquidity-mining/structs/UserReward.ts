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
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { Decimal } from "../../decimal/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isUserReward(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquidity_mining::UserReward`;
}

export interface UserRewardFields {
  poolRewardId: ToField<ID>;
  earnedRewards: ToField<Decimal>;
  cumulativeRewardsPerShare: ToField<Decimal>;
}

export type UserRewardReified = Reified<UserReward, UserRewardFields>;

/**
 * Move struct: `UserReward`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 */
export class UserReward implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquidity_mining::UserReward`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = UserReward.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquidity_mining::UserReward`;
  readonly $typeArgs: [];
  readonly $isPhantom = UserReward.$isPhantom;

  readonly poolRewardId: ToField<ID>;
  readonly earnedRewards: ToField<Decimal>;
  readonly cumulativeRewardsPerShare: ToField<Decimal>;

  private constructor(typeArgs: [], fields: UserRewardFields) {
    this.$fullTypeName = composeSuiType(
      UserReward.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquidity_mining::UserReward`;
    this.$typeArgs = typeArgs;

    this.poolRewardId = fields.poolRewardId;
    this.earnedRewards = fields.earnedRewards;
    this.cumulativeRewardsPerShare = fields.cumulativeRewardsPerShare;
  }

  static reified(): UserRewardReified {
    return {
      typeName: UserReward.$typeName,
      fullTypeName: composeSuiType(
        UserReward.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquidity_mining::UserReward`,
      typeArgs: [] as [],
      isPhantom: UserReward.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        UserReward.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        UserReward.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UserReward.fromBcs(data),
      bcs: UserReward.bcs,
      fromJSONField: (field: any) => UserReward.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UserReward.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        UserReward.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        UserReward.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        UserReward.fetch(client, id),
      new: (fields: UserRewardFields) => {
        return new UserReward([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return UserReward.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<UserReward>> {
    return phantom(UserReward.reified());
  }
  static get p() {
    return UserReward.phantom();
  }

  static get bcs() {
    return bcs.struct("UserReward", {
      pool_reward_id: ID.bcs,
      earned_rewards: Decimal.bcs,
      cumulative_rewards_per_share: Decimal.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): UserReward {
    return UserReward.reified().new({
      poolRewardId: decodeFromFields(ID.reified(), fields.pool_reward_id),
      earnedRewards: decodeFromFields(Decimal.reified(), fields.earned_rewards),
      cumulativeRewardsPerShare: decodeFromFields(
        Decimal.reified(),
        fields.cumulative_rewards_per_share,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UserReward {
    if (!isUserReward(item.type)) {
      throw new Error("not a UserReward type");
    }

    return UserReward.reified().new({
      poolRewardId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.pool_reward_id,
      ),
      earnedRewards: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.earned_rewards,
      ),
      cumulativeRewardsPerShare: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.cumulative_rewards_per_share,
      ),
    });
  }

  static fromBcs(data: Uint8Array): UserReward {
    return UserReward.fromFields(UserReward.bcs.parse(data));
  }

  toJSONField() {
    return {
      poolRewardId: this.poolRewardId,
      earnedRewards: this.earnedRewards.toJSONField(),
      cumulativeRewardsPerShare: this.cumulativeRewardsPerShare.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): UserReward {
    return UserReward.reified().new({
      poolRewardId: decodeFromJSONField(ID.reified(), field.poolRewardId),
      earnedRewards: decodeFromJSONField(
        Decimal.reified(),
        field.earnedRewards,
      ),
      cumulativeRewardsPerShare: decodeFromJSONField(
        Decimal.reified(),
        field.cumulativeRewardsPerShare,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): UserReward {
    if (json.$typeName !== UserReward.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return UserReward.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): UserReward {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUserReward(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a UserReward object`,
      );
    }
    return UserReward.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): UserReward {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isUserReward(data.bcs.type)) {
        throw new Error(`object at is not a UserReward object`);
      }

      return UserReward.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return UserReward.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<UserReward> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching UserReward object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isUserReward(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a UserReward object`);
    }

    return UserReward.fromSuiObjectData(res.data);
  }
}
