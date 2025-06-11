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

export function isStakingRequestEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator::StakingRequestEvent`;
}

export interface StakingRequestEventFields {
  poolId: ToField<ID>;
  validatorAddress: ToField<"address">;
  stakerAddress: ToField<"address">;
  epoch: ToField<"u64">;
  amount: ToField<"u64">;
}

export type StakingRequestEventReified = Reified<
  StakingRequestEvent,
  StakingRequestEventFields
>;

/**
 * Move struct: `StakingRequestEvent`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator`
 */
export class StakingRequestEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator::StakingRequestEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = StakingRequestEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator::StakingRequestEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = StakingRequestEvent.$isPhantom;

  readonly poolId: ToField<ID>;
  readonly validatorAddress: ToField<"address">;
  readonly stakerAddress: ToField<"address">;
  readonly epoch: ToField<"u64">;
  readonly amount: ToField<"u64">;

  private constructor(typeArgs: [], fields: StakingRequestEventFields) {
    this.$fullTypeName = composeSuiType(
      StakingRequestEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator::StakingRequestEvent`;
    this.$typeArgs = typeArgs;

    this.poolId = fields.poolId;
    this.validatorAddress = fields.validatorAddress;
    this.stakerAddress = fields.stakerAddress;
    this.epoch = fields.epoch;
    this.amount = fields.amount;
  }

  static reified(): StakingRequestEventReified {
    return {
      typeName: StakingRequestEvent.$typeName,
      fullTypeName: composeSuiType(
        StakingRequestEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator::StakingRequestEvent`,
      typeArgs: [] as [],
      isPhantom: StakingRequestEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        StakingRequestEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        StakingRequestEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => StakingRequestEvent.fromBcs(data),
      bcs: StakingRequestEvent.bcs,
      fromJSONField: (field: any) => StakingRequestEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        StakingRequestEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        StakingRequestEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        StakingRequestEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        StakingRequestEvent.fetch(client, id),
      new: (fields: StakingRequestEventFields) => {
        return new StakingRequestEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return StakingRequestEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<StakingRequestEvent>> {
    return phantom(StakingRequestEvent.reified());
  }
  static get p() {
    return StakingRequestEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("StakingRequestEvent", {
      pool_id: ID.bcs,
      validator_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      staker_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      epoch: bcs.u64(),
      amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): StakingRequestEvent {
    return StakingRequestEvent.reified().new({
      poolId: decodeFromFields(ID.reified(), fields.pool_id),
      validatorAddress: decodeFromFields("address", fields.validator_address),
      stakerAddress: decodeFromFields("address", fields.staker_address),
      epoch: decodeFromFields("u64", fields.epoch),
      amount: decodeFromFields("u64", fields.amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): StakingRequestEvent {
    if (!isStakingRequestEvent(item.type)) {
      throw new Error("not a StakingRequestEvent type");
    }

    return StakingRequestEvent.reified().new({
      poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id),
      validatorAddress: decodeFromFieldsWithTypes(
        "address",
        item.fields.validator_address,
      ),
      stakerAddress: decodeFromFieldsWithTypes(
        "address",
        item.fields.staker_address,
      ),
      epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
    });
  }

  static fromBcs(data: Uint8Array): StakingRequestEvent {
    return StakingRequestEvent.fromFields(StakingRequestEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      poolId: this.poolId,
      validatorAddress: this.validatorAddress,
      stakerAddress: this.stakerAddress,
      epoch: this.epoch.toString(),
      amount: this.amount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): StakingRequestEvent {
    return StakingRequestEvent.reified().new({
      poolId: decodeFromJSONField(ID.reified(), field.poolId),
      validatorAddress: decodeFromJSONField("address", field.validatorAddress),
      stakerAddress: decodeFromJSONField("address", field.stakerAddress),
      epoch: decodeFromJSONField("u64", field.epoch),
      amount: decodeFromJSONField("u64", field.amount),
    });
  }

  static fromJSON(json: Record<string, any>): StakingRequestEvent {
    if (json.$typeName !== StakingRequestEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return StakingRequestEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): StakingRequestEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isStakingRequestEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a StakingRequestEvent object`,
      );
    }
    return StakingRequestEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): StakingRequestEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isStakingRequestEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a StakingRequestEvent object`);
      }

      return StakingRequestEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return StakingRequestEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<StakingRequestEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching StakingRequestEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isStakingRequestEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a StakingRequestEvent object`);
    }

    return StakingRequestEvent.fromSuiObjectData(res.data);
  }
}
