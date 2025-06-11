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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { ID } from "../../../0x2/object/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isUnstakingRequestEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator::UnstakingRequestEvent`;
}

export interface UnstakingRequestEventFields {
  poolId: ToField<ID>;
  validatorAddress: ToField<"address">;
  stakerAddress: ToField<"address">;
  stakeActivationEpoch: ToField<"u64">;
  unstakingEpoch: ToField<"u64">;
  principalAmount: ToField<"u64">;
  rewardAmount: ToField<"u64">;
}

export type UnstakingRequestEventReified = Reified<
  UnstakingRequestEvent,
  UnstakingRequestEventFields
>;

/**
 * Move struct: `UnstakingRequestEvent`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator`
 */
export class UnstakingRequestEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator::UnstakingRequestEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = UnstakingRequestEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator::UnstakingRequestEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = UnstakingRequestEvent.$isPhantom;

  readonly poolId: ToField<ID>;
  readonly validatorAddress: ToField<"address">;
  readonly stakerAddress: ToField<"address">;
  readonly stakeActivationEpoch: ToField<"u64">;
  readonly unstakingEpoch: ToField<"u64">;
  readonly principalAmount: ToField<"u64">;
  readonly rewardAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: UnstakingRequestEventFields) {
    this.$fullTypeName = composeSuiType(
      UnstakingRequestEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator::UnstakingRequestEvent`;
    this.$typeArgs = typeArgs;

    this.poolId = fields.poolId;
    this.validatorAddress = fields.validatorAddress;
    this.stakerAddress = fields.stakerAddress;
    this.stakeActivationEpoch = fields.stakeActivationEpoch;
    this.unstakingEpoch = fields.unstakingEpoch;
    this.principalAmount = fields.principalAmount;
    this.rewardAmount = fields.rewardAmount;
  }

  static reified(): UnstakingRequestEventReified {
    return {
      typeName: UnstakingRequestEvent.$typeName,
      fullTypeName: composeSuiType(
        UnstakingRequestEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator::UnstakingRequestEvent`,
      typeArgs: [] as [],
      isPhantom: UnstakingRequestEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        UnstakingRequestEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        UnstakingRequestEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UnstakingRequestEvent.fromBcs(data),
      bcs: UnstakingRequestEvent.bcs,
      fromJSONField: (field: any) => UnstakingRequestEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        UnstakingRequestEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        UnstakingRequestEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        UnstakingRequestEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        UnstakingRequestEvent.fetch(client, id),
      new: (fields: UnstakingRequestEventFields) => {
        return new UnstakingRequestEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return UnstakingRequestEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<UnstakingRequestEvent>> {
    return phantom(UnstakingRequestEvent.reified());
  }
  static get p() {
    return UnstakingRequestEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("UnstakingRequestEvent", {
      pool_id: ID.bcs,
      validator_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      staker_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      stake_activation_epoch: bcs.u64(),
      unstaking_epoch: bcs.u64(),
      principal_amount: bcs.u64(),
      reward_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): UnstakingRequestEvent {
    return UnstakingRequestEvent.reified().new({
      poolId: decodeFromFields(ID.reified(), fields.pool_id),
      validatorAddress: decodeFromFields("address", fields.validator_address),
      stakerAddress: decodeFromFields("address", fields.staker_address),
      stakeActivationEpoch: decodeFromFields(
        "u64",
        fields.stake_activation_epoch,
      ),
      unstakingEpoch: decodeFromFields("u64", fields.unstaking_epoch),
      principalAmount: decodeFromFields("u64", fields.principal_amount),
      rewardAmount: decodeFromFields("u64", fields.reward_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UnstakingRequestEvent {
    if (!isUnstakingRequestEvent(item.type)) {
      throw new Error("not a UnstakingRequestEvent type");
    }

    return UnstakingRequestEvent.reified().new({
      poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id),
      validatorAddress: decodeFromFieldsWithTypes(
        "address",
        item.fields.validator_address,
      ),
      stakerAddress: decodeFromFieldsWithTypes(
        "address",
        item.fields.staker_address,
      ),
      stakeActivationEpoch: decodeFromFieldsWithTypes(
        "u64",
        item.fields.stake_activation_epoch,
      ),
      unstakingEpoch: decodeFromFieldsWithTypes(
        "u64",
        item.fields.unstaking_epoch,
      ),
      principalAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.principal_amount,
      ),
      rewardAmount: decodeFromFieldsWithTypes("u64", item.fields.reward_amount),
    });
  }

  static fromBcs(data: Uint8Array): UnstakingRequestEvent {
    return UnstakingRequestEvent.fromFields(
      UnstakingRequestEvent.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      poolId: this.poolId,
      validatorAddress: this.validatorAddress,
      stakerAddress: this.stakerAddress,
      stakeActivationEpoch: this.stakeActivationEpoch.toString(),
      unstakingEpoch: this.unstakingEpoch.toString(),
      principalAmount: this.principalAmount.toString(),
      rewardAmount: this.rewardAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): UnstakingRequestEvent {
    return UnstakingRequestEvent.reified().new({
      poolId: decodeFromJSONField(ID.reified(), field.poolId),
      validatorAddress: decodeFromJSONField("address", field.validatorAddress),
      stakerAddress: decodeFromJSONField("address", field.stakerAddress),
      stakeActivationEpoch: decodeFromJSONField(
        "u64",
        field.stakeActivationEpoch,
      ),
      unstakingEpoch: decodeFromJSONField("u64", field.unstakingEpoch),
      principalAmount: decodeFromJSONField("u64", field.principalAmount),
      rewardAmount: decodeFromJSONField("u64", field.rewardAmount),
    });
  }

  static fromJSON(json: Record<string, any>): UnstakingRequestEvent {
    if (json.$typeName !== UnstakingRequestEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return UnstakingRequestEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): UnstakingRequestEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUnstakingRequestEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a UnstakingRequestEvent object`,
      );
    }
    return UnstakingRequestEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): UnstakingRequestEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isUnstakingRequestEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a UnstakingRequestEvent object`);
      }

      return UnstakingRequestEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return UnstakingRequestEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<UnstakingRequestEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching UnstakingRequestEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isUnstakingRequestEvent(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a UnstakingRequestEvent object`,
      );
    }

    return UnstakingRequestEvent.fromSuiObjectData(res.data);
  }
}
